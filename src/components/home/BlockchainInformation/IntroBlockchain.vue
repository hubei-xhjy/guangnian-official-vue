<script setup lang="ts">
</script>

<template>
  <div>
    <div class="content">
      <img class="NFTs" src="@/assets/blockchain-badge.png" alt="一枚刻着 Bitcoin 以及 Blockchain 字眼的 NFT">
      <p>
        区块链是一种去中心化的数据库技术，其特点在于数据的存储不依赖于单一中心服务器，而是分布在整个网络中的众多节点上。
        每个节点都持有一份数据的副本，任何数据的变更都需要网络中大多数节点的共识，这使得区块链具有极高的透明度和安全性。
      </p>
      <p>区块链技术是一场创新革命，它通过提供一个去中心化、透明且安全的数据管理系统，重塑了我们对信任和交易的理解。 </p>
      <p>
        这项技术不仅能够降低交易成本，提高效率和透明度，还能在众多领域内实现数据的可追溯、不可篡改性，
        从而为金融、供应链管理、医疗保健等行业带来深远影响，开辟了新的可能性，推动了社会和经济结构的创新变革。
      </p>
    </div>
    <router-link to="/blog/2024/02/24/What-is-blockchain-An-Intro-for-Everyone/">
    <div class="read-more btn">
      阅读详情
    </div>
    </router-link>
  </div>
</template>

<style scoped>
.content {
  position: relative;
}

.NFTs {
  float: right;
  width: 200px;
  margin-left: 16px;
}

p {
  margin-top: 8px;
  text-indent: 4ch;
}
</style>