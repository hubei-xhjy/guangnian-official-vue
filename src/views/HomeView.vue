<script setup lang="ts">
import HomeBanner from "@/components/home/HomeBanner.vue";
import HomeBlockchainInformation from "@/components/home/HomeBlockchainInformation.vue";
import HomeCompanyIntro from "@/components/home/HomeCompanyIntro.vue";
import HomeRecruitments from "@/components/home/HomeRecruitments.vue";
</script>

<template>
  <main>
    <HomeBanner class="section"/>
    <HomeBlockchainInformation class="section"/>
    <HomeCompanyIntro class="section bg-gray"/>
    <HomeRecruitments class="section"/>
  </main>
</template>

<style scoped>
.section {
  margin-bottom: 48px;
}

.bg-gray {
  background-color: #eee;
}

@media screen and (max-width: 768px) {
  .section {
    margin-bottom: 0;
  }
}
</style>
