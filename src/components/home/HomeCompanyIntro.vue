<script setup lang="ts">

</script>

<template>
  <div class="home-company-intro">
    <div class="warp mobile">
      <h1>公司介绍</h1>
      <img src="@/assets/logo.png" alt="Light Year Logo" class="logo"/>
      <p>
        作为一家致力于区块链领域的前沿公司，我们专注于区块链项目的投研和投资，深入参与项目的早期发展和公测阶段。
        我们团队通过运用专业技能，使用多个账号对即将上线的区块链项目进行细致的稳定性测试，为项目的改进和优化提供关键贡献。
        这不仅帮助项目方发现并解决潜在问题，确保项目顺利上线，也为我们公司带来了稳定的收入来源。
        项目方根据我们的贡献值给予相应的激励，这种基于贡献的激励机制，不仅展现了我们在区块链领域的专业能力，也体现了我们与项目方共同成长、互利共赢的合作理念。
      </p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.warp {
  width: 768px;
}

.home-company-intro {
  padding: 32px 0;
  overflow: hidden;
}

.logo {
  width: 150px;
  float: left;
  margin-right: 32px;
}

p {
  text-indent: 4ch;
  margin-top: 16px;
}

@media screen and (max-width: 768px) {
  .warp {
    width: 80%;
  }

  .mobile {
    display: flex;
    flex-direction: column;
  }

  .logo {
    margin: 0 auto;
    width: 100px;
  }
}
</style>