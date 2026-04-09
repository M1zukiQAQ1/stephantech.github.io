<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="welcome-page">
    <header class="welcome-header">
      <span class="welcome-logo">小智写作练习室</span>
    </header>

    <main class="welcome-main">
      <section class="welcome-hero">
        <h1 class="welcome-title">专注写作，精益求精</h1>
        <p class="welcome-subtitle">
          面向学生的 AI 辅助写作练习平台——在限时环境中完成真实写作任务，
          由老师布置题目，AI 即时反馈，帮助你稳步提升写作能力。
        </p>
        <div class="welcome-cta">
          <button class="btn-primary" @click="router.push('/login')">开始使用</button>
        </div>
      </section>

      <section class="welcome-features">
        <div class="feature-card">
          <div class="feature-icon">✍️</div>
          <h3 class="feature-title">限时写作练习</h3>
          <p class="feature-desc">模拟真实考试环境，设置倒计时，帮助学生在压力下保持专注与高效。</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🤖</div>
          <h3 class="feature-title">AI 智能评分</h3>
          <p class="feature-desc">提交作答后由 AI 即时批改，提供结构、语言和内容层面的详细反馈。</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3 class="feature-title">教师统一管理</h3>
          <p class="feature-desc">教师可发布题目、查看学生提交记录，并在仪表盘中一览班级整体情况。</p>
        </div>
      </section>
    </main>

    <footer class="welcome-footer">
      <span>© 2025 小智写作练习室 · 让每一次练习都有意义</span>
    </footer>
  </div>
</template>

<style scoped>
.welcome-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
}

/* Header */
.welcome-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 32px;
  background: #1a1a1a;
}

.welcome-logo {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
}

/* Hero */
.welcome-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px 60px;
}

.welcome-hero {
  max-width: 620px;
  width: 100%;
  text-align: center;
  padding: 80px 0 60px;
}

.welcome-title {
  font-size: 36px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 20px;
  line-height: 1.2;
}

.welcome-subtitle {
  font-size: 16px;
  color: #555;
  line-height: 1.75;
  margin: 0 0 36px;
}

.welcome-cta {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.btn-primary {
  padding: 12px 36px;
  background: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-primary:hover {
  background: #333;
}

/* Features */
.welcome-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  max-width: 860px;
  width: 100%;
}

.feature-card {
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  padding: 28px 24px;
  background: #fafafa;
  text-align: center;
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 14px;
}

.feature-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 10px;
}

.feature-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.65;
  margin: 0;
}

/* Footer */
.welcome-footer {
  padding: 18px 32px;
  background: #f5f5f5;
  border-top: 1px solid #e4e4e4;
  text-align: center;
  font-size: 13px;
  color: #888;
}
</style>
