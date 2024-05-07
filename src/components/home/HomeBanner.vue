<script setup lang="ts">
function jumpToRecruitment() {
  document.getElementById("recruitment")?.scrollIntoView()
}
</script>

<template>
  <div class="home-banner">
    <div class="page-title">光年之行</div>
    <div class="page-slogan">一家致力于区块链与 Web3 项目投研投资的新创科技公司</div>
    <div class="call-to-action-btn" @click="jumpToRecruitment">加入我们</div>
  </div>
</template>

<style scoped>
.home-banner {
  text-align: center;
  padding: 114px 32px;
  background-image: url("@/assets/banner-min.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  color: white;
  text-shadow: 2px 2px 4px #333;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
}

.page-slogan {
  font-size: 1.25rem;
  font-weight: bold;
}

.call-to-action-btn {
  display: inline-block;
  margin-top: 16px;
  padding: 8px 32px;
  background-color: white;
  text-shadow: none;
  color: var(--color-text);
  box-shadow: 2px 2px 8px 2px #999;
  cursor: pointer;
  border-radius: 4px;
}

@media screen and (max-width: 1100px) {
  .home-banner {
    padding: 32px 32px;
  }
}
</style>