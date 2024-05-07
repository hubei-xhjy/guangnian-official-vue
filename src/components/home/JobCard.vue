<script setup lang="ts">
defineProps<{
  jobName: string,
  tags: string[],
  description: string,
  salary?: number,
  experience?: number, // 工作经验
  education?: string, // 学历要求
  imgPath?: string,
  jobPage: string,
  isPrimary?: boolean
}>();
</script>

<template>
  <div class="job-card">
    <div class="job-meta">
      <div>
        <img :src="imgPath" alt=""/>
      </div>
      <div>
        <h2 class="job-name">{{ jobName }}</h2>
        <div class="tags">
          <span class="tag" v-for="(tag, index) in tags" :key="index">#{{ tag }}</span>
        </div>
        <div class="job-exp">经验要求：{{ experience != undefined ? experience + ' 年以上' : '实习生 / 应届生' }}</div>
      </div>
    </div>
    <div>
      <div class="job-desc">{{ description }}</div>
      <div class="job-edu">最低学历要求：{{ education != undefined ? education : '不限' }}</div>
      <div class="job-salary">月薪 {{ salary != undefined ? '￥' + salary + '+' : '面议' }}</div>
      <!-- <div class="job-read-more-hint">点击卡片以查看更多详情</div> -->
    </div>
  </div>
</template>

<style scoped>
.job-card {
  flex: 1 1 0;
  margin: 16px;
  padding: 4px 16px 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 2px #ccc;
  cursor: pointer;
  user-select: none;
}

.job-card {
  position: relative;
  overflow: hidden;
}

.job-card:hover::before {
  content: "";
  width: 400%;
  height: 400%;
  background-image: conic-gradient(
      white,
      dodgerblue,
      white,
      dodgerblue
  );
  position: absolute;
  left: -150%;
  bottom: -150%;
  z-index: -2;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.job-card:after {
  inset: 2vmin;
  transition: inset 0.3s ease-in-out;
}

.job-card:hover::after {
  content: "";
  position: absolute;
  inset: 0.5vmin;
  background-color: white;
  border-radius: 1vmin;
  z-index: -1;
}

.job-card img {
  max-width: 100%;
  min-height: 300px;
  max-height: 300px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.tag {
  display: inline-block;
  font-size: 0.75rem;
  margin: 0 4px;
  padding: 2px 8px;
  border-radius: 16px;
  background-color: var(--color-background);
  border: 1px solid var(--color-text);
  color: var(--color-text);
}

.job-name {
  font-weight: bold;
}

.tags {
  padding: 8px 0;
}

.job-exp {
  font-style: italic;
}

.job-edu {
  text-align: end;
}

.job-desc {
  padding: 8px 0;
  height: 6rem;
}

.job-salary {
  font-size: 1.25rem;
  font-weight: bold;
  text-align: end;
}

.job-read-more-hint {
  text-align: center;
  padding: 8px;
  margin: 8px 4px 0 4px;
  color: transparent;
  transition: color 0.2s ease-in-out;
}

.job-card:hover .job-read-more-hint {
  color: unset;
}

@media screen and (max-width: 1100px) {
  .job-card {
    flex: 1 0 auto;
  }

  .job-card:hover::after {
    inset: 1vmin;
  }

  .job-card .job-meta {
    display: flex;
  }

  .job-card .job-meta img {
    min-height: auto;
    max-height: 150px;
  }

  .job-card .job-meta > *:nth-child(1) {
    margin-right: 16px;
  }

  .job-card .job-meta > *:nth-child(2) {
    width: 80%;
  }

  .job-desc {
    height: auto;
  }

  .job-read-more-hint {
    display: none;
  }
}
</style>