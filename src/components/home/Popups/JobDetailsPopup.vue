<script setup lang="ts">
import {onMounted, ref} from "vue";
import VueMarkdown from "vue-markdown-render";
import {useAjax} from "@/utils/ajax";

// Ajax
const ajax = useAjax()
const src = ref('');

const props = defineProps<{
  currentJob?: string,
  closeLogic: () => void
}>();


function loadDoc() {
  const mdUrl = '/src/markdowns/jobs/' + props.currentJob + '.md';
  ajax("GET", mdUrl,
      (resp: string) => {
        src.value = resp;
      }, (resp: string) => {
        src.value = "# 很抱歉，似乎找不到您想要的工作\n\n" + resp;
      }
  )
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
      <div @click="closeLogic" class="close-btn">x</div>
      <blockquote><p>【注意：本岗位目前在孝感，拟 5 月迁到武汉】</p></blockquote>
      <VueMarkdown :source="src"/>
      <hr>
      <p>有意向加入该岗位者，请准备自己的个人简历以及相关材料提交到 <a href="mailto:hr@xhjy.xyz">hr@xhjy.xyz</a> 邮件中，我们会在
        5 个工作日之内给您答复。</p>
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
  z-index: 1;
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
    transform: translate(-50%, 0%) scale(0.8);
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

.close-btn {
  position: fixed;
  right: 16px;
  font-size: 2rem;
}

@media screen and (max-width: 768px) {
  ::v-deep(h1) {
    font-size: 1.5rem;
    padding: 0 0 16px;
  }

  ::v-deep(p) {
    text-indent: unset;
  }

  ::v-deep(ul), ::v-deep(ol) {
    padding-left: 2ch;
  }
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>