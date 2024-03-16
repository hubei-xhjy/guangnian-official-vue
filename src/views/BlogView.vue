<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useAjax} from "@/utils/ajax";
import VueMarkdown from "vue-markdown-render";

const route = useRoute();
const ajax = useAjax();

const year = route.params.year;
const month = route.params.month;
const day = route.params.day;
const post = route.params.post;
const markdownFile = `/src/posts/${year}${month}${day}-${post}.md`;

let respCode = ref(200);
let markdownSrc = ref('');

onMounted(() => {
  ajax("GET", markdownFile,
      (resp: string) => {
        // 处理 Markdown 中的注释部分
        // 提取元数据部分
        const metadataPattern = /---\n([\s\S]*?)\n---/;
        const metadataMatch = resp.match(metadataPattern);
        // 定义 metadata 为一个具有索引签名的对象
        let metadata: { [key: string]: string } = {};
        if (metadataMatch && metadataMatch[1]) {
          metadataMatch[1].split('\n').forEach(line => {
            const [key, value] = line.split(': ').map(item => item.trim());
            if (key && value) {
              metadata[key] = value;
            }
          });
        }

        // 提取正文内容
        const content = resp.replace(metadataPattern, '').trim();
        console.log(metadata)
        markdownSrc.value = content; // 这里应该存储提取后的正文内容
      },
      (resp: string) => {
        respCode.value = 404;
      });
});
</script>

<template>
  <div class="blog">
    <div v-if="respCode == 404" class="error-msg">
      <img src="@/assets/sticker-404.png" alt="404"/>
      <span>您正在访问的页面为： {{ route.fullPath }}</span>
      <p>哎呀，您访问的页面还在开发中。敬请期待！</p>
    </div>
    <div v-else>
      <img :src="`/src/posts/covers/${year}${month}${day}-${post}.jpeg`" :alt="`${year}${month}${day}-${post}.jpeg`"
           class="cover-img"/>
      <VueMarkdown :source="markdownSrc"/>
    </div>
  </div>
</template>

<style scoped>
.blog {
  width: 768px;
  margin: 0 auto;
}

.error-msg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
}

.error-msg img {
  width: 256px;
}

.error-msg span {
  font-size: 1.25rem;
}

.error-msg p {
  font-size: 2rem;
}

.cover-img {
  width: 100%;
  height: 256px;
  object-fit: cover;
  object-position: center;
}

/* Markdown Renderer */
::v-deep(hr),
::v-deep(blockquote),
::v-deep(p),
::v-deep(ul),
::v-deep(ol) {
  margin: 16px 0;
}

::v-deep(h1), ::v-deep(h2), ::v-deep(h3), ::v-deep(h4), ::v-deep(h5), ::v-deep(h6) {
  font-weight: bold;
}

::v-deep(h1) {
  font-size: 2.5rem;
}

::v-deep(h2) {
  font-size: 2rem;
}

::v-deep(h3) {
  font-size: 1.75rem;
}

::v-deep(h4) {
  font-size: 1.5rem;
}

::v-deep(h5) {
  font-size: 1.25rem;
}

::v-deep(h6) {
  font-size: 1rem;
}

::v-deep(p) {
  text-indent: 4ch;
}

::v-deep(strong) {
  font-weight: bold;
}

::v-deep(ul), ::v-deep(ol) {
  padding-left: 2ch;
}

@media (max-width: 768px) {
  .blog {
    width: 90%;
  }

  .cover-img {
    height: auto;
  }

  ::v-deep(h1) {
    font-size: 1.75rem;
  }

  ::v-deep(h2) {
    font-size: 1.5rem;
  }

  ::v-deep(h3) {
    font-size: 1.2rem;
  }

  ::v-deep(h4) {
    font-size: 1.15rem;
  }

  ::v-deep(h5) {
    font-size: 1.1rem;
  }

  ::v-deep(h6) {
    font-size: 1rem;
  }
}
</style>