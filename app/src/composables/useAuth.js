import { ref } from "vue";
import { auth, db } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const user = ref(null);
export const userProfile = ref(null);
export const authReady = ref(false);
export const guestMode = ref(false);

let resolveAuthReady;
export const authReadyPromise = new Promise((resolve) => {
  resolveAuthReady = resolve;
});

onAuthStateChanged(auth, async (firebaseUser) => {
  user.value = firebaseUser;
  if (firebaseUser) {
    guestMode.value = false;
    const snap = await getDoc(doc(db, "users", firebaseUser.uid));
    userProfile.value = snap.exists() ? snap.data() : null;
  } else {
    userProfile.value = null;
  }
  if (!authReady.value) {
    authReady.value = true;
    resolveAuthReady();
  }
});

export const useAuth = () => {
  const login = async (email, password) => {
    guestMode.value = false;
    const cred = await signInWithEmailAndPassword(auth, email, password);
    // Explicitly load profile so role is available before the caller redirects
    const snap = await getDoc(doc(db, "users", cred.user.uid));
    userProfile.value = snap.exists() ? snap.data() : null;
    return cred;
  };

  // Students only — validates invite code before completing registration
  const register = async (email, password, name, inviteCode) => {
    // 1. Create auth account first
    let cred;
    try {
      cred = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      throw e;
    }

    // 2. Look up the invite code
    try {
      const q = query(
        collection(db, "codes"),
        where("code", "==", inviteCode.trim().toUpperCase()),
        where("used", "==", false)
      );
      const snap = await getDocs(q);

      if (snap.empty) {
        // Invalid or already-used code — roll back auth account
        await cred.user.delete();
        const err = new Error("invalid-code");
        err.code = "auth/invalid-code";
        throw err;
      }

      const codeDoc = snap.docs[0];
      const { teacherId, teacherName } = codeDoc.data();

      // 3. Create user profile
      const profile = { name, email, role: "student", teacherId, teacherName };
      await setDoc(doc(db, "users", cred.user.uid), profile);
      userProfile.value = profile;

      // 4. Mark code as used
      await updateDoc(codeDoc.ref, {
        used: true,
        usedBy: cred.user.uid,
        usedByName: name,
      });

      return cred;
    } catch (e) {
      // If anything after account creation fails, clean up
      if (cred && e.code !== "auth/invalid-code") {
        try { await cred.user.delete(); } catch {}
      }
      throw e;
    }
  };

  const continueAsGuest = () => {
    guestMode.value = true;
  };

  const logout = async () => {
    guestMode.value = false;
    await signOut(auth);
  };

  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  const changePassword = async (currentPassword, newPassword) => {
    const credential = EmailAuthProvider.credential(user.value.email, currentPassword);
    await reauthenticateWithCredential(user.value, credential);
    await updatePassword(user.value, newPassword);
  };

  return { user, userProfile, authReady, guestMode, login, register, continueAsGuest, logout, resetPassword, changePassword };
};
