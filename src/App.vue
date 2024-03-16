<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <!-- 顶部标题栏 -->
  <header>
    <div class="warp nav-bar">
      <div class="site-name">
        湖北光年之行科技有限责任公司
      </div>
      <div>
        <ul class="menu">
          <router-link to="/">
            <li class="menu-item">首页</li>
          </router-link>
          <router-link to="/blog">
            <li class="menu-item">博客</li>
          </router-link>
<!--          <router-link to="/about">-->
<!--            <li class="menu-item">关于</li>-->
<!--          </router-link>-->
        </ul>
      </div>
    </div>
  </header>
  <RouterView/>
  <footer>
    <div class="warp">
      <span></span>
    </div>
  </footer>
</template>

<style scoped>
header {
  padding: 8px 0;
}

header > .nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-name {
  font-weight: bold;
  font-size: 2rem;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  line-height: 48px;
}

li {
  padding: 0 16px;
  border-right: 1px solid var(--color-text);
}

li:last-child {
  border-right: none;
}

.menu-item {
  cursor: pointer;
}

footer {
  height: 128px;
  background-color: #dddddd;
}

@media screen and (max-width: 600px) {
  .site-name {
    font-size: 1.25rem;
  }
}

@media screen and (max-width: 450px) {
  .site-name {
    display: none;
  }

}
</style>
