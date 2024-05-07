<script setup lang="ts">

import JobCard from "@/components/home/JobCard.vue";
import FemaleGamerSticker from "@/assets/job-sticker-gamer-female-min.png"
import MaleGamerSticker from "@/assets/job-sticker-gamer-male-min.png"
import TraderSticker from "@/assets/job-sticker-trader-min.png"
import TraderBoySticker from "@/assets/job-sticker-trader-boy-min.png"
import DeveloperSticker from "@/assets/job-sticker-developer-min.png"
import JobDetailsPopup from "@/components/home/Popups/JobDetailsPopup.vue";

import {ref} from "vue";
import FaqPopup from "@/components/home/Popups/FaqPopup.vue";

const jobs = ref([
  // {
  //   name: "网站操作员",
  //   tags: ['测试', '区块链', '交互'],
  //   description: "对区块链项目的去中心化应用 (dApps) 以及去中心化游戏 (GameFi) 进行交互",
  //   salary: 5000,
  //   imagePath: MaleGamerSticker,
  //   education: "专科",
  //   jobPage: "website-operator",
  //   isPrimary: false
  // },
  {
    name: "区块链实习生",
    tags: ['交互', '测试', '去中心化应用'],
    // description: "对区块链项目的稳定性进行测试",
    description: "对区块链项目的去中心化应用 (dApps) 以及去中心化游戏 (GameFi) 进行交互",
    salary: 5500,
    imagePath: FemaleGamerSticker,
    education: "本科",
    jobPage: "dapps-operator",
    isPrimary: true
  },
  {
    name: "自动化开发工程师",
    tags: ['自动化', 'Python', 'Linux'],
    description: "使用 Python + Selenium 等自动化框架对 Web3 前端页面进行自动化操作，包括处理插件。",
    salary: 8000,
    imagePath: DeveloperSticker,
    education: "本科",
    experience: "1年以上",
    jobPage: "automation-developer",
    isPrimary: false
  },
  {
    name: "投资投研助理",
    tags: ['交易', '加密货币', '数据处理'],
    description: "对区块链项目进行研究，发掘潜在有价值的区块链项目",
    salary: 6500,
    imagePath: TraderBoySticker,
    education: "本科",
    experience: "3年以上",
    jobPage: "investor",
    isPrimary: false
  }
]);

const currentPopupJob = ref("");

function onJobDetailsClick(job: string) {
  currentPopupJob.value = job
  // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //   // 如果是移动设备，跳转到对应页面
  //   window.location.href = `jobs/${job}`;
  // } else {
  //   // 不是移动设备，使用弹窗
  //   currentPopupJob.value = job;
  // }
}

function onJobDetailsClose() {
  currentPopupJob.value = "";
}

const isFaqOpened = ref(false);

function onFaqClick() {
  isFaqOpened.value = true;
}

function onFaqClose() {
  isFaqOpened.value = false;
}

function onBossClick() {
  window.location.href = "https://www.zhipin.com/gongsi/773b56c552faa86b1Xx92dy4GFo~.html";
}
</script>

<template>
  <div class="home-recruitments" id="recruitment">
    <div class="warp">
      <div class="part-header">
        <h1>我们正在招聘中</h1>
        <div class="slogan">迈向星辰大海</div>
      </div>
      <div class="job-cards">

        <!-- 在这里改 Jobs 的卡片，最多 4 个岗位，多了不好看 -->
        <JobCard v-for="job in jobs" :key="job.jobPage"
                 :job-name="job.name"
                 :tags="job.tags"
                 :description="job.description"
                 :salary="job.salary"
                 :img-path="job.imagePath"
                 :education="job.education"
                 :job-page="job.jobPage"
                 :is-primary="job.isPrimary"
                 @click="onJobDetailsClick(job.jobPage)"/>
        
                 <!-- BOSS zhipin URL https://www.zhipin.com/gongsi/773b56c552faa86b1Xx92dy4GFo~.html -->

        <!-- 弹框 -->
        <JobDetailsPopup v-if="currentPopupJob != ''" :currentJob="currentPopupJob"
                         :close-logic="onJobDetailsClose"/>
      </div>
      <div class="boss-section">
        <div class="boss btn" @click="onBossClick">
          简历投递
          <div class="boss-comments">心动不如行动！到 BOSS 直聘投递简历，一起探索区块链的未来！</div>
        </div>
      </div>
      <div class="faq-section">
        <div class="faq btn" @click="onFaqClick">
          常见问题 Frequently Asked Question
          <div class="faq-comments">公司什么时候搬到武汉？办公地点在哪里？加入公司后能学到什么？薪资结构是怎样的？你想知道的一系列问题都在这里……</div>
        </div>
        <FaqPopup v-if="isFaqOpened" :close-logic="onFaqClose"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job-cards {
  display: flex;
  justify-content: space-between;
}

.home-recruitments {
  padding: 16px 0;
  margin: 16px 0;
}

.part-header {
  text-align: center
}

.slogan::before {
  content: " -- ";
}

.slogan::after {
  content: " -- ";
}

.faq,
.boss {
  margin: 16px;
  padding: 8px;
  box-shadow: 2px 2px 4px 2px #ccc;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
}

.boss.btn {
  background-image: linear-gradient(to top, #00d7c6 50%, transparent 50%);
}

.faq-comments,
.boss-comments {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1rem;
  color: #666;
  font-style: italic;
}

@media screen and (max-width: 1100px) {
  .job-cards {
    flex-direction: column;
  }

  .faq {
    margin: 8px;
    font-size: 1rem;
  }
}
</style>