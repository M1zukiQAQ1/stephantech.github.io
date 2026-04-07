<script setup>
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useAuth } from "../composables/useAuth";

const { userProfile, guestMode, logout, changePassword } = useAuth();
const router = useRouter();

const handleLogout = async () => {
  await logout();
  router.push("/login");
};

const showChangePw = ref(false);
const currentPw = ref("");
const newPw = ref("");
const confirmPw = ref("");
const changePwError = ref("");
const changePwMsg = ref("");
const changePwLoading = ref(false);

const openChangePw = () => {
  currentPw.value = "";
  newPw.value = "";
  confirmPw.value = "";
  changePwError.value = "";
  changePwMsg.value = "";
  showChangePw.value = true;
};

const handleChangePw = async () => {
  changePwError.value = "";
  changePwMsg.value = "";
  if (!currentPw.value || !newPw.value || !confirmPw.value) {
    changePwError.value = "请填写所有字段。";
    return;
  }
  if (newPw.value.length < 6) {
    changePwError.value = "新密码至少需要 6 位。";
    return;
  }
  if (newPw.value !== confirmPw.value) {
    changePwError.value = "两次输入的新密码不一致。";
    return;
  }
  changePwLoading.value = true;
  try {
    await changePassword(currentPw.value, newPw.value);
    changePwMsg.value = "密码已更新。";
    currentPw.value = "";
    newPw.value = "";
    confirmPw.value = "";
  } catch (e) {
    if (e.code === "auth/wrong-password" || e.code === "auth/invalid-credential") {
      changePwError.value = "当前密码不正确。";
    } else if (e.code === "auth/too-many-requests") {
      changePwError.value = "尝试过多，请稍后再试。";
    } else {
      changePwError.value = "修改失败，请重试。";
    }
  } finally {
    changePwLoading.value = false;
  }
};
</script>

<template>
  <div class="nav-bar">
    <span class="nav-title">小智写作练习室</span>
    <div class="nav-right">
      <template v-if="guestMode">
        <span class="nav-user nav-guest-label">访客模式</span>
        <button class="nav-logout-btn" @click="handleLogout">登录 / 注册</button>
      </template>
      <template v-else>
        <span v-if="userProfile?.role === 'teacher'" class="nav-badge">Teacher</span>
        <span class="nav-user">{{ userProfile?.name }}</span>
        <RouterLink v-if="userProfile?.role === 'teacher'" to="/dashboard" class="nav-link">Dashboard</RouterLink>
        <RouterLink v-if="userProfile?.role === 'teacher'" to="/practice" class="nav-link">Practice</RouterLink>
        <button class="nav-logout-btn" @click="openChangePw">修改密码</button>
        <button class="nav-logout-btn" @click="handleLogout">Logout</button>
      </template>

      <!-- Change Password Modal -->
      <div v-if="showChangePw" class="modal-overlay" @click.self="showChangePw = false">
        <div class="modal-box">
          <h2 class="modal-title">修改密码</h2>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
            <input v-model="currentPw" class="login-input" type="password" placeholder="当前密码" autocomplete="current-password">
            <input v-model="newPw" class="login-input" type="password" placeholder="新密码（至少 6 位）" autocomplete="new-password">
            <input v-model="confirmPw" class="login-input" type="password" placeholder="确认新密码" autocomplete="new-password">
          </div>
          <p v-if="changePwMsg" style="color:#22c55e;font-size:13px;margin-bottom:8px">{{ changePwMsg }}</p>
          <p v-if="changePwError" class="login-error">{{ changePwError }}</p>
          <div class="modal-actions">
            <button class="modal-btn modal-btn-cancel" @click="showChangePw = false">取消</button>
            <button class="modal-btn modal-btn-confirm" :disabled="changePwLoading" @click="handleChangePw">
              {{ changePwLoading ? "保存中…" : "确认修改" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
