<script setup lang="ts">
const props = defineProps<{
  closeLogic: () => void;
}>();
</script>

<template>
  <div class="faq-popup">
    <div class="overlay" @click="closeLogic"></div>
    <div class="card">
      <h1>求职常见问题 (FAQ)</h1>

      <h2>搬迁时间及办公地点</h2>
      <h3>问题：公司什么时候搬到武汉？办公地点在哪里？</h3>
      <p>回答：本来计划在 5
        月前搬迁至武汉，但鉴于当前市场的不稳定性，经过综合考虑，我们决定暂缓搬迁以降低风险。办公地点将选在武汉市武昌区，具体楼宇尚在选择中，请您耐心等待最新消息。</p>

      <h2>公司业务及收入来源</h2>
      <h3>问题：公司的主要业务是什么？收入来源有哪些？</h3>
      <p>回答：我们专注于 Web3
        和区块链技术的研究及投资。主要通过对区块链项目的测试和社区贡献，根据我们的贡献获得项目方的激励。</p>

      <h2>工作内容</h2>
      <h3>问题：日常工作内容包括什么？</h3>
      <p>
        回答：我们的主要工作是参与区块链项目的公开测试，利用多个账户对这些项目的稳定性进行检验，并提供真实的用户操作数据。</p>

      <h2>学习机会</h2>
      <h3>问题：加入公司后能学到什么？</h3>
      <p>回答：在这里，您将学习到丰富的投资知识和基础的区块链技术知识。</p>

      <h2>薪资结构</h2>
      <h3>问题：薪资结构是怎样的？</h3>
      <p>回答：我们提供无责底薪（根据不同岗位而定）加上项目绩效奖励，绩效奖励可能在月薪的 2 到 4 倍。</p>

      <h2>新员工指导</h2>
      <h3>问题：新人入职后会做什么？</h3>
      <p>回答：新员工将得到资深员工的指导，我们致力于营造一个轻松活跃的工作环境。</p>

      <h2>额外福利</h2>
      <h3>问题：公司提供哪些额外福利？</h3>
      <p>回答：我们提供住宿，供应零食和奶茶，定期组织不同形式的团建活动以确保工作和休息的平衡，同时提供五险一金。</p>

      <h2>职业发展</h2>
      <h3>问题：公司如何支持员工的职业发展？</h3>
      <p>回答：我们鼓励员工参与各种培训和研讨会，提供内部晋升机会，确保每位员工的成长与发展。</p>

      <h2>工作文化</h2>
      <h3>问题：公司的工作文化是怎样的？</h3>
      <p>回答：我们倡导开放、包容的工作氛围，鼓励团队合作，同时尊重个人的意见和创造性。</p>

      <h2>工作地点灵活性</h2>
      <h3>问题：公司是否支持远程工作或灵活的工作地点？</h3>
      <p>回答：根据工作性质和项目需求，我们提供一定程度的工作地点灵活性，以促进工作效率和员工满意度。</p>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}

.card {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1280px;
  height: 90vh;
  margin: 0 auto;
  background-color: white;
  padding: 32px;
  overflow-y: scroll;
  border-radius: 16px;
  z-index: 99;
  animation: popup 0.5s ease-in-out;
}

h1 {
  padding: 16px 32px;
  border-bottom: 2px solid #ccc;
}

h2 {
  margin-top: 16px;
  margin-bottom: 8px;
  border-bottom: 1px dashed #ccc;
}

h2, h3, p {
  padding-left: 16px;
}

@media screen and (max-width: 768px) {
  .card {
    padding: 16px;
  }
}
</style>