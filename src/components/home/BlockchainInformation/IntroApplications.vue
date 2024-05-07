<script setup lang="ts">
// 获取轮播图空间的宽度
import {onMounted} from "vue";
import {ref} from "vue";
import BlockchainApplicationPopup from "@/components/home/Popups/BlockchainApplicationPopup.vue";

let carouselSpace: HTMLDivElement
let carouselWidth: number;
let currentIndex = 0;
let currentTranslateX = 0;

function leftArrowClick() {
  // 实现向左滚动的功能
  currentIndex = (currentIndex - 1 + 4) % 4; // 假设轮播图有 4 个项
  // 更新当前的translateX值
  currentTranslateX = -currentIndex * carouselWidth;
  // 应用translateX值到轮播图空间
  carouselSpace.style.transform = `translateX(${currentTranslateX}px)`;
}

function rightArrowClick() {
  // 实现向右滚动的功能
  currentIndex = (currentIndex + 1) % 4;
  currentTranslateX = -currentIndex * carouselWidth;
  carouselSpace.style.transform = `translateX(${currentTranslateX}px)`;
}

const currentPopupApplication = ref("");

function onReadMoreClick(application: string) {
  currentPopupApplication.value = application;
}

function onApplicationPopupClose() {
  currentPopupApplication.value = "";
}

onMounted(() => {
  carouselSpace = document.getElementById("blockchain-app-carousel") as HTMLDivElement;
  carouselWidth = carouselSpace.offsetWidth;
})
</script>

<template>
  <div class="intro-applications">
    <div class="left-arrow" @click="leftArrowClick">&lt;</div>
    <div class="right-arrow" @click="rightArrowClick">&gt;</div>
    <div class="carousel" id="blockchain-app-carousel">
      <div class="application">
        <h2>去中心化金融 DeFi</h2>
        <p>
          去中心化金融（DeFi，Decentralized Finance）是一个利用区块链技术，特别是智能合约，来重塑传统金融服务的金融生态系统。
          在DeFi生态系统中，金融产品和服务不是通过传统的中心化机构（如银行、保险公司或交易所）提供，而是在去中心化的网络上运行，
          这个网络通常是构建在以太坊（Ethereum）等区块链平台上。
        </p>
        <div class="read-more btn" @click="onReadMoreClick('defi')">了解更多</div>
      </div>
      <div class="application">
        <h2>非同质化代币 NFTs</h2>
        <p>
          非同质化代币（NFT，Non-Fungible Token）是一种特殊类型的加密资产，代表了一种独一无二的项，无法与其他项互换。
          NFT在区块链上创建和管理，确保了每个NFT的独特性和所有权的可验证性。与比特币或以太币等同质化代币不同，NFT具有独特的属性；
          同质化代币之间是完全相同的，可以互换。
        </p>
        <div class="read-more btn" @click="onReadMoreClick('nft')">了解更多</div>
      </div>
      <div class="application">
        <h2>去中心化游戏</h2>
        <p>
          去中心化游戏（Decentralized Games）是一种基于区块链技术的游戏形式，其中游戏逻辑和资产存储在区块链上，
          确保了游戏的透明性、不可篡改性和去中心化。这种游戏形式与传统的在线游戏有显著不同，尤其在资产所有权、游戏治理和经济系统的构建上。
        </p>
        <div class="read-more btn" @click="onReadMoreClick('degame')">了解更多</div>
      </div>
      <div class="application">
        <h2>金融游戏化 GameFi</h2>
        <p>
          游戏化金融（Gamified Finance），有时也称为金融游戏化，是将游戏设计元素、思维和机制应用于非游戏环境，特别是在金融领域的一种实践。
          它旨在通过增加用户参与度、提高用户体验和促进学习来使金融服务更加吸引人和易于理解。
        </p>
        <div class="read-more btn" @click="onReadMoreClick('gamefi')">了解更多</div>
      </div>

    </div>
  </div>
  <BlockchainApplicationPopup v-if="currentPopupApplication != ''"
                              :close-logic="onApplicationPopupClose"
                              :current-application="currentPopupApplication"/>
</template>

<style scoped>
.intro-applications {
  overflow: hidden;
  position: relative;
}

.left-arrow, .right-arrow {
  font-size: 4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
}

.right-arrow {
  right: 0;
}

.carousel {
  display: flex;
  transition: all 0.5s linear;
}

.application {
  min-width: 80%;
  margin: 0 10%;
}

@media screen and (max-width: 600px) {
  .left-arrow, .right-arrow {
    font-size: 2rem;
  }
}
</style>