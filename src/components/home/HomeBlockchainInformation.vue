<script setup lang="ts">
import {ref} from "vue";
import IntroBlockchain from "@/components/home/BlockchainInformation/IntroBlockchain.vue";
import IntroFuture from "@/components/home/BlockchainInformation/IntroFuture.vue";
import IntroApplications from "@/components/home/BlockchainInformation/IntroApplications.vue";

const blockchainIntros = [{
  title: "区块链技术概述",
  components: IntroBlockchain,
}, {
  title: "区块链的前景",
  components: IntroFuture,
}, {
  title: "区块链的应用场景",
  components: IntroApplications,
}];

const currentPart = ref<number>(0);
const currentBlockTitle = ref(blockchainIntros[currentPart.value].title)

function changePage(id: number) {
  currentPart.value = id;
  currentBlockTitle.value = blockchainIntros[currentPart.value].title
}
</script>

<template>
  <div class="home-blockchain-information warp">
    <!-- Tab 标题 -->
    <div class="tab">
      <div class="tab-item" v-for="(intro, index) in blockchainIntros" :key="'tab-' + index" @click="changePage(index)">
        {{ intro.title }}
      </div>
    </div>

    <!-- Tab 内容 -->
    <div class="content">
      <h1>{{ currentBlockTitle }}</h1>
      <hr/>
      <div v-for="(intro, index) in blockchainIntros" :key="'content-' + index">
        <component :is="intro.components" v-if="currentPart === index"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-blockchain-information {
  padding: 16px 0;
  display: flex;
  border-radius: 8px;
  min-height: 45vh;
  position: relative;
}

.tab {
  width: 20%;
}

.tab > .tab-item {
  padding: 24px 16px;
  cursor: pointer;
  border-bottom: 1px solid #aaa;
}

.home-blockchain-information > .tab > .tab-item:last-child {
  border-bottom: none;
}

.home-blockchain-information > .tab > .tab-item:hover {
  background-color: #dddddd;
}

hr {
  margin-bottom: 16px;
}

.content {
  width: 80%;
  padding: 16px;
  margin: 0 32px
}

::v-deep(.read-more) {
  display: inline-block;
  margin-top: 16px;
  padding: 8px 32px;
  border: 1px solid var(--color-text);
  cursor: pointer;
}

@media screen and (max-width: 1000px) {
  .home-blockchain-information {
    flex-direction: column;
  }

  .tab {
    width: 100%;
  }

  .tab > .tab-item {
    padding: 8px 16px;
  }

  .content {
    width: 100%;
    margin: 0;
  }
}
</style>