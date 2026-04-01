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
const toField = ref("");
const subjectField = ref("");
const showWordCount = ref(true);

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
  if (isRunning.value) return "Pause";
  return hasStarted.value ? "Resume" : "Start";
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
  if (file) readImageFile(file);
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
  if (!element) return;
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

const cutText = () => {
  const el = answerTextarea.value;
  if (!el) return;
  el.focus();
  document.execCommand("cut");
};

const pasteText = async () => {
  const el = answerTextarea.value;
  if (!el) return;
  try {
    const text = await navigator.clipboard.readText();
    const start = el.selectionStart;
    const end = el.selectionEnd;
    answerText.value =
      answerText.value.substring(0, start) +
      text +
      answerText.value.substring(end);
    await nextTick();
    el.selectionStart = el.selectionEnd = start + text.length;
    el.focus();
  } catch {
    el.focus();
    document.execCommand("paste");
  }
};

const undoText = () => {
  const el = answerTextarea.value;
  if (!el) return;
  el.focus();
  document.execCommand("undo");
};

const redoText = () => {
  const el = answerTextarea.value;
  if (!el) return;
  el.focus();
  document.execCommand("redo");
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
  <div class="exam-wrapper">
    <!-- Header bar -->
    <div class="exam-header">
      <span class="exam-title">小智写作练习室</span>
      <div class="timer-area">
        <span
          class="timer-display"
          :class="{
            'timer-warning': remainingSeconds > 0 && remainingSeconds <= 60,
            'timer-overtime': remainingSeconds < 0,
          }"
        >{{ formattedTimer }}</span>
        <label class="sr-only" for="timeInput">分钟</label>
        <input
          id="timeInput"
          v-model.number="timeInputMinutes"
          type="number"
          min="1"
          class="time-input"
          :disabled="isRunning"
        >
        <span class="time-label">min</span>
        <button class="header-btn btn-start" @click="toggleTimer">{{ startButtonText }}</button>
        <button class="header-btn btn-reset" @click="resetTimer">Reset</button>
      </div>
    </div>

    <!-- Two-column body -->
    <div class="exam-body">
      <!-- Left: Question panel -->
      <div class="question-panel">
        <div class="question-inner">
          <textarea
            v-model="questionText"
            class="question-textarea"
            placeholder="Paste the question here, or Ctrl+V to paste a screenshot..."
            @paste="handleQuestionPaste"
          ></textarea>
          <img v-if="imagePreview" :src="imagePreview" class="image-preview" alt="Question image">
        </div>
        <div class="question-upload">
          <label for="imgUpload" class="upload-label">Browse image...</label>
          <input
            id="imgUpload"
            type="file"
            accept="image/*"
            class="sr-only"
            @change="handleImageUpload"
          >
        </div>
      </div>

      <!-- Right: Response panel -->
      <div class="response-panel">
        <div class="response-header">
          <strong>Your Response:</strong>
        </div>

        <div class="response-meta">
          <div class="meta-row">
            <span class="meta-label">To:</span>
            <input v-model="toField" class="meta-input" type="text" placeholder="Recipient">
          </div>
          <div class="meta-row">
            <span class="meta-label">Subject:</span>
            <input v-model="subjectField" class="meta-input" type="text" placeholder="Subject">
          </div>
        </div>

        <div class="toolbar">
          <button class="toolbar-btn toolbar-btn-dark" @click="cutText">Cut</button>
          <button class="toolbar-btn" @click="pasteText">Paste</button>
          <button class="toolbar-btn" @click="undoText">Undo</button>
          <button class="toolbar-btn" @click="redoText">Redo</button>
          <div class="toolbar-spacer"></div>
          <button class="toolbar-btn toolbar-btn-muted" @click="showWordCount = !showWordCount">
            {{ showWordCount ? "Hide Word Count" : "Show Word Count" }}
          </button>
          <span v-if="showWordCount" class="word-count-display">{{ wordCount }}</span>
        </div>

        <textarea
          ref="answerTextarea"
          v-model="answerText"
          class="answer-textarea"
          placeholder="Begin writing here..."
        ></textarea>

        <div class="response-footer">
          <button class="footer-btn btn-export" @click="exportAndCopy">Download .doc</button>
          <a
            href="https://doubao.com/bot/vy4SxUh5"
            target="_blank"
            rel="noreferrer"
            class="footer-btn btn-ai"
          >AI 批改 (Doubao)</a>
        </div>
      </div>
    </div>
  </div>
</template>
