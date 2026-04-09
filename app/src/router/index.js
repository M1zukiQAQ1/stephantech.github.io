import { createRouter, createWebHashHistory } from "vue-router";
import { user, userProfile, guestMode, authReadyPromise } from "../composables/useAuth";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/WelcomeView.vue"),
      meta: { public: true },
    },
    {
      path: "/login",
      component: () => import("../views/LoginView.vue"),
      meta: { public: true },
    },
    {
      path: "/practice",
      component: () => import("../views/PracticeView.vue"),
      meta: { requiresAuth: true, allowGuest: true },
    },
    {
      path: "/dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: { requiresAuth: true, teacherOnly: true },
    },
  ],
});

router.beforeEach(async (to) => {
  await authReadyPromise;

  const loggedIn = !!user.value;
  const isGuest = guestMode.value;
  const isTeacher = userProfile.value?.role === "teacher";

  // "/" welcome — redirect logged-in users to their home
  if (to.path === "/") {
    if (loggedIn || isGuest) return isTeacher ? "/dashboard" : "/practice";
    return; // show welcome page for unauthenticated visitors
  }

  if (to.meta.requiresAuth && !loggedIn && !isGuest) return "/login";
  if (to.meta.teacherOnly && !isTeacher) return "/practice";

  // After login, redirect to role home
  if (to.path === "/login" && (loggedIn || isGuest)) {
    return isTeacher ? "/dashboard" : "/practice";
  }
});

export default router;
