<script setup lang="ts">

</script>

<template>
  <div class="home-company-intro">
    <div class="warp mobile">
      <h1>公司介绍</h1>
      <img src="@/assets/logo-min.png" alt="Light Year Logo" class="logo"/>
      <p>
        公司专注于正快速发展的互联网前沿行业区块链，涉足项目交互 投研 投资。
      </p>
      <p>
        区块链技术范式在信任机制的可靠性方面远超当前各行各业依赖自我监督的机制，在金融方面已经部分颠覆和替代传统业务模式，将在社交 游戏等更多方面颠覆和替代传统模式。
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