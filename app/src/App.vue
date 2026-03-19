<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

const timeInputMinutes = ref(10);
const remainingSeconds = ref(600);
const isRunning = ref(false);
const hasStarted = ref(false);
const questionText = ref("");
const answerText = ref("");
const imagePreview = ref("");
const answerTextarea = ref(null);

let timerId = null;

const normalizeMinutes = (value) => {
  const minutes = Number(value);
  if (!Number.isFinite(minutes) || minutes < 1) {
    return 1;
  }
  return Math.floor(minutes);
};

const stopTimer = () => {
  if (timerId) {
    window.clearInterval(timerId);
    timerId = null;
  }
  isRunning.value = false;
};

const formattedTimer = computed(() => {
  const sign = remainingSeconds.value < 0 ? "-" : "";
  const total = Math.abs(remainingSeconds.value);
  const minutes = String(Math.floor(total / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  return `${sign}${minutes}:${seconds}`;
});

const startButtonText = computed(() => {
  if (isRunning.value) {
    return "暂停计时";
  }
  return hasStarted.value ? "继续计时" : "开始计时";
});

const wordCount = computed(() => {
  const text = answerText.value.trim();
  return text ? text.split(/\s+/).length : 0;
});

watch(timeInputMinutes, (newValue) => {
  if (!hasStarted.value && !isRunning.value) {
    const sanitized = normalizeMinutes(newValue);
    if (sanitized !== newValue) {
      timeInputMinutes.value = sanitized;
      return;
    }
    remainingSeconds.value = sanitized * 60;
  }
});

const toggleTimer = () => {
  if (isRunning.value) {
    stopTimer();
    return;
  }

  if (!hasStarted.value) {
    timeInputMinutes.value = normalizeMinutes(timeInputMinutes.value);
    remainingSeconds.value = timeInputMinutes.value * 60;
  }

  hasStarted.value = true;
  isRunning.value = true;
  timerId = window.setInterval(() => {
    remainingSeconds.value -= 1;
  }, 1000);
};

const resetTimer = () => {
  stopTimer();
  timeInputMinutes.value = normalizeMinutes(timeInputMinutes.value);
  remainingSeconds.value = timeInputMinutes.value * 60;
  hasStarted.value = false;
};

const readImageFile = (file) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    imagePreview.value = event.target?.result || "";
  };
  reader.readAsDataURL(file);
};

const handleImageUpload = (event) => {
  const file = event.target.files?.[0];
  if (file) {
    readImageFile(file);
  }
  event.target.value = "";
};

const handleQuestionPaste = (event) => {
  const items = event.clipboardData?.items || [];
  for (const item of items) {
    if (item.type?.startsWith("image/")) {
      const file = item.getAsFile();
      if (file) {
        readImageFile(file);
      }
      break;
    }
  }
};

const autoResizeAnswer = () => {
  const element = answerTextarea.value;
  if (!element) {
    return;
  }

  element.style.height = "auto";
  element.style.height = `${Math.max(element.scrollHeight, 300)}px`;
};

const escapeHtml = (text) => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

const exportAndCopy = async () => {
  if (!answerText.value.trim()) {
    window.alert("内容为空！");
    return;
  }

  try {
    await navigator.clipboard.writeText(answerText.value);
    window.alert("✅ 内容已自动复制！\n\n请点击下方紫色按钮去豆包直接粘贴。");
  } catch {
    window.alert("复制失败，请手动复制后继续。");
  }

  const topic = questionText.value || "未填写题目";
  const html = `<html><meta charset="utf-8"><body>
    <h2 style="color:#4a90e2;">TOEFL Practice Report</h2>
    <p><b>Topic:</b> ${escapeHtml(topic)}</p>
    ${imagePreview.value ? `<img src="${imagePreview.value}" width="400"><br>` : ""}
    <hr><h3>Content:</h3><p>${escapeHtml(answerText.value).replace(/\n/g, "<br>")}</p>
  </body></html>`;

  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "TOEFL_Practice.doc";
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
};

onBeforeUnmount(() => {
  stopTimer();
});

onMounted(() => {
  autoResizeAnswer();
});

watch(answerText, async () => {
  await nextTick();
  autoResizeAnswer();
});
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="timer-controls">
        <label for="timeInput">设置时间(分钟):</label>
        <input
          id="timeInput"
          v-model.number="timeInputMinutes"
          type="number"
          min="1"
          :disabled="isRunning"
        >
        <button class="btn-start" @click="toggleTimer">{{ startButtonText }}</button>
        <button class="btn-reset" @click="resetTimer">重置</button>
      </div>

      <div
        class="timer-display"
        :class="{
          'timer-warning': remainingSeconds > 0 && remainingSeconds <= 60,
          'timer-overtime': remainingSeconds < 0
        }"
      >
        {{ formattedTimer }}
      </div>
    </div>

    <div class="section-title">
      <span>题目栏 (支持截图 Ctrl+V 或选图片)</span>
      <div class="upload-btn-wrapper">
        <label for="imgUpload" class="upload-label">📂 选图片文件</label>
        <input
          id="imgUpload"
          type="file"
          accept="image/*"
          class="sr-only"
          @change="handleImageUpload"
        >
      </div>
    </div>

    <div class="question-area">
      <textarea
        v-model="questionText"
        class="question-input"
        rows="2"
        placeholder="在此粘贴题目文本，或 Ctrl+V 粘贴截图..."
        @paste="handleQuestionPaste"
      ></textarea>
      <img v-if="imagePreview" :src="imagePreview" class="image-preview" alt="题目图片">
    </div>

    <div class="section-title">作答区 (下载后自动复制作文)</div>
    <div class="answer-area">
      <textarea
        ref="answerTextarea"
        v-model="answerText"
        class="answer-input"
        placeholder="开始你的写作..."
      ></textarea>
      <div class="footer-controls">
        <div class="word-count">当前字数: <span>{{ wordCount }}</span></div>
        <button class="btn-submit" @click="exportAndCopy">📥 提交并下载文档 (自动复制)</button>
        <a
          href="https://doubao.com/bot/vy4SxUh5"
          target="_blank"
          rel="noreferrer"
          class="btn-ai"
        >
          🤖 去豆包 AI 自动批改
        </a>
      </div>
    </div>
  </div>
</template>
