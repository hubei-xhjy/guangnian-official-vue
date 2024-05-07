<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import VueMarkdown from "vue-markdown-render";

// Ajax
const route = useRoute();
const src = ref('');

function loadDoc() {
  const mdUrl = '/src/markdowns/jobs/' + route.params.jobName + '.md';
  const xHttp = new XMLHttpRequest();
  xHttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      if (xHttp.responseText.startsWith("<!DOCTYPE html>")) {
        src.value = "# 很抱歉，似乎找不到您想要的工作";
      } else {
        src.value = xHttp.responseText;
      }
    }
  };
  xHttp.open("GET", mdUrl, true);
  xHttp.send();
}

onMounted(() => {
  loadDoc();
})
</script>

<template>
  <div class="Job">
    <div class="warp">
      <VueMarkdown :source="src"/>
    </div>
  </div>
</template>

<style scoped>
.warp {
  width: 768px;
}

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
  text-indent: 2ch;
}

::v-deep(blockquote) {
  border-left: 4px solid #ffcc00;
  margin: 16px 0;
  background-color: #fffabf;
  overflow: hidden;
}

::v-deep(blockquote p) {
  text-indent: 0;
  margin: 8px 16px;
}

::v-deep(ul), ::v-deep(ol) {
  margin: 16px 0;
}

@media screen and (max-width: 768px) {
  .warp {
    width: 90%;
  }

  ::v-deep(ul), ::v-deep(ol) {
    padding-left: 2ch;
  }
}
</style>