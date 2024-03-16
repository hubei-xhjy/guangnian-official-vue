<script setup lang="ts">
import {onMounted, ref} from "vue";
import VueMarkdown from "vue-markdown-render";
import {useAjax} from "@/utils/ajax";

// Ajax
const ajax = useAjax()
const src = ref('');

const props = defineProps<{
  currentApplication?: string,
  closeLogic: () => void
}>();

function loadDoc() {
  const mdUrl = '/src/markdowns/blockchain-applications/' + props.currentApplication + '.md';
  ajax("GET", mdUrl,
      (resp: string) => {
        src.value = resp;
      }, (resp: string) => {
        src.value = "# 很抱歉，似乎找不到您想要的页面\n\n" + resp;
      }
  );
}

onMounted(() => {
  loadDoc();
})
</script>

<template>
  <div class="job-details">
    <!-- 灰色的背景，点击之后会关闭 popup（调用的父 close 函数） -->
    <div @click="closeLogic" class="overlay"></div>
    <div class="card">
      <VueMarkdown :source="src"/>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}

.card {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 768px;
  height: 90vh;
  margin: 0 auto;
  background-color: white;
  padding: 32px;
  overflow-y: scroll;
  border-radius: 16px;
  z-index: 99;
  animation: popup 0.5s ease-in-out;
}

@keyframes popup {
  /* 从下往上弹出，由透明变不透明 */
  0% {
    opacity: 0;
    transform: translate(-50%, -200%) scale(1);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

/* 标题 */
h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

/* 段落 */
p {
}

/* Cautions */
blockquote {
  border-left: 4px solid #ffcc00;
  margin: 16px 0;
  background-color: #fffabf;
  overflow: hidden;
}

blockquote p {
  text-indent: 0;
  margin: 8px 16px;
}

/* Markdown Renderer */
::v-deep(h1) {
  padding: 0 16px 16px;
  border-bottom: 1px solid var(--color-text);
  margin-bottom: 8px;
  font-weight: bolder;
  text-align: center;
}

::v-deep(h2) {
  padding-bottom: 8px;
  border-bottom: 1px dashed #ccc;
}

::v-deep(h2:before) {
  content: "⫸";
  margin-right: 16px;
}

::v-deep(p) {
  margin: 16px 0;
  text-indent: 4ch;
}

::v-deep(ul), ::v-deep(ol) {
  margin: 16px 0;
}

::v-deep(strong) {
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .card {
    width: 90%;
  }

  ::v-deep(h1) {
    font-size: 1.5rem;
    padding: 0 0 16px;
  }

  ::v-deep(p) {
    text-indent: unset;
  }

  ::v-deep(ul), ::v-deep(ol) {
    margin-left: 0;
    padding-left: 2ch;
  }
}
</style>