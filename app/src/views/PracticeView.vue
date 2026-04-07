<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../composables/useAuth";
import NavBar from "../components/NavBar.vue";

const { user, userProfile, guestMode } = useAuth();

// ── Screen state ──
const currentScreen = ref("start"); // 'start' | 'ai-setup' | 'exam'
// examState: 'idle' (before Start), 'running' (in progress), 'submitted'
const examState = ref("idle");
const startTime = ref(null);

// ── Timer ──
const timerMinutes = ref(10); // user-adjustable duration
const timerSeconds = ref(0);  // countdown seconds remaining
const timeIsUp = ref(false);
let timerInterval = null;

const formattedTimer = computed(() => {
  const m = Math.floor(timerSeconds.value / 60);
  const s = timerSeconds.value % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
});

const timerWarning = computed(() => timerSeconds.value <= 60 && timerSeconds.value > 0 && examState.value === "running");

const stopTimer = () => {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
};

onUnmounted(stopTimer);

// ── Content ──
const questionText = ref("");
const answerText = ref("");
const imagePreview = ref("");
const answerTextarea = ref(null);
const toField = ref("");
const subjectField = ref("");
const showWordCount = ref(true);
const showTimer = ref(true);

// ── Modals ──
const showAiWarning = ref(false);
const showDownloadConfirm = ref(false);
const showSubmitConfirm = ref(false);
const submitLoading = ref(false);

// ── AI-setup state ──
const aiResponseText = ref("");
const promptCopied = ref(false);
const aiGeneratedFields = ref(false);

const AI_PROMPT = `Please generate a TOEFL Writing email task. Format your response EXACTLY as shown below — do not include any text outside the tags:

[TO]
(Recipient first name only, e.g. "Alex")
[/TO]

[SUBJECT]
(Email subject line, e.g. "Group Project Participation")
[/SUBJECT]

[QUESTION]
(2–3 sentences of background/scenario context.)

**Write an email to [name]. In your email, do the following.**
* (First instruction)
* (Second instruction)
* (Third instruction)

Write as much as you can and in complete sentences.
[/QUESTION]

Rules:
- Use **bold** markdown for the "Write an email…" instruction line.
- Use * (asterisk + space) for each bullet point.
- Do not use any other markdown.`;

// ── Computed ──
const wordCount = computed(() => {
  const text = answerText.value.trim();
  return text ? text.split(/\s+/).length : 0;
});

// ── Helpers ──
const extractTag = (text, tag) => {
  const m = text.match(new RegExp(`\\[${tag}\\]([\\s\\S]*?)\\[\\/${tag}\\]`, "i"));
  return m ? m[1].trim() : "";
};

const renderMarkdown = (text) => {
  if (!text) return "";
  const processInline = (s) =>
    s
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  const lines = text.split("\n");
  const parts = [];
  let inList = false;
  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith("* ") || t.startsWith("- ")) {
      if (!inList) { parts.push("<ul>"); inList = true; }
      parts.push(`<li>${processInline(t.slice(2))}</li>`);
    } else {
      if (inList) { parts.push("</ul>"); inList = false; }
      if (t === "") parts.push('<div class="md-gap"></div>');
      else parts.push(`<p>${processInline(t)}</p>`);
    }
  }
  if (inList) parts.push("</ul>");
  return parts.join("");
};

const escapeHtml = (text) =>
  text
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// ── Start practice ──
const startPractice = () => {
  startTime.value = Date.now();
  timerSeconds.value = timerMinutes.value * 60;
  timeIsUp.value = false;
  examState.value = "running";
  timerInterval = setInterval(() => {
    if (timerSeconds.value > 0) {
      timerSeconds.value--;
    } else {
      stopTimer();
      timeIsUp.value = true;
      autoSubmit();
    }
  }, 1000);
  if (document.documentElement.requestFullscreen)
    document.documentElement.requestFullscreen().catch(() => {});
};

// ── Image ──
const readImageFile = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => { imagePreview.value = e.target?.result || ""; };
  reader.readAsDataURL(file);
};
const handleImageUpload = (event) => {
  const file = event.target.files?.[0];
  if (file) readImageFile(file);
  event.target.value = "";
};
const handleQuestionPaste = (event) => {
  for (const item of event.clipboardData?.items || []) {
    if (item.type?.startsWith("image/")) {
      event.preventDefault();
      const file = item.getAsFile();
      if (file) readImageFile(file);
      break;
    }
  }
};

// ── Answer textarea ──
const autoResizeAnswer = () => {
  const el = answerTextarea.value;
  if (!el) return;
  el.style.height = "auto";
  el.style.height = `${Math.max(el.scrollHeight, 300)}px`;
};
const cutText = () => { answerTextarea.value?.focus(); document.execCommand("cut"); };
const pasteText = async () => {
  const el = answerTextarea.value;
  if (!el) return;
  try {
    const text = await navigator.clipboard.readText();
    const start = el.selectionStart;
    const end = el.selectionEnd;
    answerText.value = answerText.value.substring(0, start) + text + answerText.value.substring(end);
    await nextTick();
    el.selectionStart = el.selectionEnd = start + text.length;
    el.focus();
  } catch { el.focus(); document.execCommand("paste"); }
};
const undoText = () => { answerTextarea.value?.focus(); document.execCommand("undo"); };
const redoText = () => { answerTextarea.value?.focus(); document.execCommand("redo"); };

// ── Download ──
const buildDownloadFilename = () => {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const ts = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
  const subject = subjectField.value.trim().replace(/[\\/:*?"<>|]/g, "_");
  return subject ? `TOEFL_Practice_${subject}_${ts}.doc` : `TOEFL_Practice_${ts}.doc`;
};
const confirmDownload = () => {
  showDownloadConfirm.value = false;
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
  link.download = buildDownloadFilename();
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
};

// ── AI grading ──
const confirmAiGrading = async () => {
  showAiWarning.value = false;
  try {
    await navigator.clipboard.writeText(answerText.value);
    window.alert("✅ 内容已自动复制！\n\n请在豆包中直接粘贴。");
  } catch { window.alert("复制失败，请手动复制后继续。"); }
  window.open("https://doubao.com/bot/vy4SxUh5", "_blank", "noreferrer");
};

// ── Submit ──
const autoSubmit = async () => {
  if (guestMode.value || !answerText.value.trim()) return;
  submitLoading.value = true;
  try {
    await addDoc(collection(db, "submissions"), {
      studentId: user.value.uid,
      studentName: userProfile.value?.name || user.value.email,
      teacherId: userProfile.value?.teacherId || null,
      question: questionText.value,
      toField: toField.value,
      subjectField: subjectField.value,
      answer: answerText.value,
      wordCount: wordCount.value,
      timeUsedSeconds: timerMinutes.value * 60,
      aiGenerated: aiGeneratedFields.value,
      submittedAt: serverTimestamp(),
    });
    examState.value = "submitted";
  } catch {
    window.alert("自动提交失败，请手动提交。");
  } finally {
    submitLoading.value = false;
  }
};

const triggerSubmit = () => {
  if (!answerText.value.trim()) { window.alert("内容为空！"); return; }
  showSubmitConfirm.value = true;
};
const confirmSubmit = async () => {
  showSubmitConfirm.value = false;
  submitLoading.value = true;
  try {
    stopTimer();
    await addDoc(collection(db, "submissions"), {
      studentId: user.value.uid,
      studentName: userProfile.value?.name || user.value.email,
      teacherId: userProfile.value?.teacherId || null,
      question: questionText.value,
      toField: toField.value,
      subjectField: subjectField.value,
      answer: answerText.value,
      wordCount: wordCount.value,
      timeUsedSeconds: timerMinutes.value * 60 - timerSeconds.value,
      aiGenerated: aiGeneratedFields.value,
      submittedAt: serverTimestamp(),
    });
    examState.value = "submitted";
  } catch {
    window.alert("提交失败，请重试。");
  } finally {
    submitLoading.value = false;
  }
};

// ── New practice ──
const newPractice = () => {
  stopTimer();
  timerSeconds.value = 0;
  timeIsUp.value = false;
  showTimer.value = true;
  examState.value = "idle";
  startTime.value = null;
  currentScreen.value = "start";
  questionText.value = "";
  answerText.value = "";
  imagePreview.value = "";
  toField.value = "";
  subjectField.value = "";
  aiGeneratedFields.value = false;
  aiResponseText.value = "";
};

// ── AI setup ──
const copyPrompt = async () => {
  try {
    await navigator.clipboard.writeText(AI_PROMPT);
    promptCopied.value = true;
    window.setTimeout(() => { promptCopied.value = false; }, 2000);
  } catch { /* ignore */ }
};
const parseAndStart = () => {
  const raw = aiResponseText.value.trim();
  if (!raw) { window.alert("请先粘贴 AI 的回复。"); return; }
  toField.value = extractTag(raw, "TO") || toField.value;
  subjectField.value = extractTag(raw, "SUBJECT") || subjectField.value;
  questionText.value = extractTag(raw, "QUESTION") || raw;
  aiGeneratedFields.value = true;
  currentScreen.value = "exam";
};
const goToExamManual = () => { aiGeneratedFields.value = false; currentScreen.value = "exam"; };
const goToAiSetup = () => { currentScreen.value = "ai-setup"; };
const backToStart = () => {
  currentScreen.value = "start";
  aiResponseText.value = "";
  aiGeneratedFields.value = false;
  toField.value = "";
  subjectField.value = "";
  questionText.value = "";
};

onMounted(() => autoResizeAnswer());
watch(answerText, async () => { await nextTick(); autoResizeAnswer(); });
</script>

<template>
  <NavBar />

  <!-- ── Start screen ── -->
  <div v-if="currentScreen === 'start'" class="start-wrapper">
    <div class="start-card-outer">
      <p class="start-subtitle">选择题目来源，开始练习</p>
      <div class="start-options">
        <button class="option-card" @click="goToExamManual">
          <div class="option-icon">✏️</div>
          <div class="option-label">手动输入题目</div>
          <div class="option-desc">直接在练习界面粘贴或输入题目内容</div>
        </button>
        <button class="option-card" @click="goToAiSetup">
          <div class="option-icon">🤖</div>
          <div class="option-label">AI 生成题目</div>
          <div class="option-desc">借助 Claude / ChatGPT / 豆包 一键生成托福写作题</div>
        </button>
      </div>
    </div>
  </div>

  <!-- ── AI setup screen ── -->
  <div v-else-if="currentScreen === 'ai-setup'" class="start-wrapper">
    <div class="ai-setup-card">
      <button class="back-btn" @click="backToStart">← 返回</button>
      <h2 class="ai-setup-title">AI 生成题目</h2>
      <div class="ai-step">
        <div class="ai-step-num">1</div>
        <div class="ai-step-body">
          <div class="ai-step-heading">复制以下提示词，前往 AI 助手生成题目</div>
          <div class="ai-prompt-box">{{ AI_PROMPT }}</div>
          <div class="ai-step-actions">
            <button class="ai-copy-btn" :class="{ copied: promptCopied }" @click="copyPrompt">
              {{ promptCopied ? "✓ 已复制" : "复制提示词" }}
            </button>
            <span class="ai-links-label">前往：</span>
            <a href="https://claude.ai" target="_blank" rel="noreferrer" class="ai-link ai-link-claude">Claude</a>
            <a href="https://chatgpt.com" target="_blank" rel="noreferrer" class="ai-link ai-link-gpt">ChatGPT</a>
            <a href="https://doubao.com" target="_blank" rel="noreferrer" class="ai-link ai-link-doubao">豆包</a>
          </div>
        </div>
      </div>
      <div class="ai-step">
        <div class="ai-step-num">2</div>
        <div class="ai-step-body">
          <div class="ai-step-heading">粘贴 AI 的完整回复</div>
          <textarea v-model="aiResponseText" class="ai-response-textarea" placeholder="在此处粘贴 AI 的回复内容..."></textarea>
          <button class="ai-parse-btn" @click="parseAndStart">解析并开始练习 →</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Exam screen ── -->
  <div v-else class="exam-wrapper">
    <div class="exam-body">
      <!-- Left: Question panel -->
      <div class="question-panel">
        <div class="question-inner">
          <div v-if="aiGeneratedFields" class="question-rendered" v-html="renderMarkdown(questionText)"></div>
          <textarea
            v-else
            v-model="questionText"
            class="question-textarea"
            placeholder="Paste the question here, or Ctrl+V to paste a screenshot..."
            @paste="handleQuestionPaste"
          ></textarea>
          <img v-if="imagePreview" :src="imagePreview" class="image-preview" alt="Question image">
        </div>
        <div v-if="!aiGeneratedFields" class="question-upload">
          <label for="imgUpload" class="upload-label">Browse image...</label>
          <input id="imgUpload" type="file" accept="image/*" class="sr-only" @change="handleImageUpload">
        </div>
      </div>

      <!-- Right: Response panel -->
      <div class="response-panel">
        <!-- Pre-start overlay -->
        <div v-if="examState === 'idle'" class="exam-start-overlay">
          <div class="timer-setup">
            <label class="timer-setup-label">限时</label>
            <input
              v-model.number="timerMinutes"
              class="timer-setup-input"
              type="number"
              min="1"
              max="120"
            >
            <span class="timer-setup-unit">分钟</span>
          </div>
          <button class="exam-start-btn" @click="startPractice">开始练习</button>
          <p class="exam-start-hint">点击后进入全屏模拟考试环境</p>
        </div>

        <!-- Running state -->
        <template v-else>
          <div class="response-header"><strong>Your Response:</strong></div>
          <div class="response-meta">
            <div class="meta-row">
              <span class="meta-label">To:</span>
              <input
                v-model="toField"
                class="meta-input"
                :class="{ 'meta-input-locked': aiGeneratedFields || examState === 'submitted' }"
                type="text"
                placeholder="Recipient"
                :readonly="aiGeneratedFields || examState === 'submitted'"
              >
            </div>
            <div class="meta-row">
              <span class="meta-label">Subject:</span>
              <input
                v-model="subjectField"
                class="meta-input"
                :class="{ 'meta-input-locked': aiGeneratedFields || examState === 'submitted' }"
                type="text"
                placeholder="Subject"
                :readonly="aiGeneratedFields || examState === 'submitted'"
              >
            </div>
          </div>

          <div class="toolbar">
            <button class="toolbar-btn toolbar-btn-dark" :disabled="examState === 'submitted'" @click="cutText">Cut</button>
            <button class="toolbar-btn" :disabled="examState === 'submitted'" @click="pasteText">Paste</button>
            <button class="toolbar-btn" :disabled="examState === 'submitted'" @click="undoText">Undo</button>
            <button class="toolbar-btn" :disabled="examState === 'submitted'" @click="redoText">Redo</button>
            <div class="toolbar-spacer"></div>
            <span v-if="showTimer" class="timer-display" :class="{ 'timer-warning': timerWarning, 'timer-done': examState === 'submitted' || timeIsUp }">
              {{ timeIsUp ? "⏰ 00:00" : `⏱ ${formattedTimer}` }}
            </span>
            <button class="toolbar-btn toolbar-btn-muted" @click="showTimer = !showTimer">
              {{ showTimer ? "Hide Timer" : "Show Timer" }}
            </button>
            <button class="toolbar-btn toolbar-btn-muted" @click="showWordCount = !showWordCount">
              {{ showWordCount ? "Hide Word Count" : "Show Word Count" }}
            </button>
            <span v-if="showWordCount" class="word-count-display">{{ wordCount }}</span>
          </div>

          <div v-if="timeIsUp" class="timesup-banner">⏰ 时间到！请提交作答。</div>

          <textarea
            ref="answerTextarea"
            v-model="answerText"
            class="answer-textarea"
            placeholder="Begin writing here..."
            :readonly="examState === 'submitted'"
          ></textarea>

          <!-- Footer: only show Submit while running; Download/AI only after submitted -->
          <div class="response-footer">
            <template v-if="examState === 'running'">
              <button v-if="!guestMode" class="footer-btn btn-submit" @click="triggerSubmit">提交作答</button>
              <span v-else class="guest-submit-hint">登录后可提交给老师</span>
            </template>
            <template v-if="examState === 'submitted'">
              <button class="footer-btn btn-export" @click="showDownloadConfirm = true">Download .doc</button>
              <button class="footer-btn btn-ai" @click="showAiWarning = true">AI 批改 (Doubao)</button>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>

  <!-- ── Completion overlay (after submit) ── -->
  <div v-if="examState === 'submitted'" class="completion-overlay">
    <div class="completion-card">
      <div class="completion-icon">🎉</div>
      <h2 class="completion-title">练习完成！</h2>
      <p class="completion-stats">共写 <strong>{{ wordCount }}</strong> 词 &nbsp;·&nbsp; 用时 <strong>{{ formattedTimer }}</strong></p>
      <div class="completion-actions">
        <button class="completion-btn completion-btn-download" @click="showDownloadConfirm = true">Download .doc</button>
        <button class="completion-btn completion-btn-ai" @click="showAiWarning = true">AI 批改 (豆包)</button>
        <button class="completion-btn completion-btn-new" @click="newPractice">新练习</button>
      </div>
    </div>
  </div>

  <!-- AI grading modal -->
  <div v-if="showAiWarning" class="modal-overlay" @click.self="showAiWarning = false">
    <div class="modal-box">
      <div class="modal-icon">⚠️</div>
      <h2 class="modal-title">AI 批改提示</h2>
      <p class="modal-body">AI 评分仅供参考，不代表真实考试成绩。内容将自动复制到剪贴板。</p>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-cancel" @click="showAiWarning = false">取消</button>
        <button class="modal-btn modal-btn-confirm" @click="confirmAiGrading">前往批改</button>
      </div>
    </div>
  </div>

  <!-- Download modal -->
  <div v-if="showDownloadConfirm" class="modal-overlay" @click.self="showDownloadConfirm = false">
    <div class="modal-box">
      <div class="modal-icon">📄</div>
      <h2 class="modal-title">下载确认</h2>
      <p class="modal-body">确认将当前内容下载为 .doc 文件吗？</p>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-cancel" @click="showDownloadConfirm = false">取消</button>
        <button class="modal-btn modal-btn-confirm" @click="confirmDownload">确认下载</button>
      </div>
    </div>
  </div>

  <!-- Submit confirm modal -->
  <div v-if="showSubmitConfirm" class="modal-overlay" @click.self="showSubmitConfirm = false">
    <div class="modal-box">
      <div class="modal-icon">📤</div>
      <h2 class="modal-title">提交确认</h2>
      <p class="modal-body">确认将当前作答提交给老师吗？提交后将无法继续编辑。</p>
      <div class="modal-actions">
        <button class="modal-btn modal-btn-cancel" @click="showSubmitConfirm = false">取消</button>
        <button class="modal-btn modal-btn-confirm" :disabled="submitLoading" @click="confirmSubmit">
          {{ submitLoading ? "提交中…" : "确认提交" }}
        </button>
      </div>
    </div>
  </div>
</template>
