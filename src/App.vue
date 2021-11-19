<script setup>
</script>

<template>
  <!-- 主要容器 -->
  <el-container>
    <!-- 导航栏 -->
    <el-header class="header-wrap">
      <Header />
    </el-header>
    <!-- 主要内容 -->
    <el-main class="main-wrap">
      <!-- 路由容器 -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" enter-from-class="fade-enter-from">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>

    <!-- 底部信息栏 -->
    <el-footer class="footer-wrap">
      <Footer />
    </el-footer>
  </el-container>
</template>

<style lang="less" scoped>
#app {
  .header-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    width: 100%;
    height: @header-height;

    padding: 0px;

    background: white;
  }
  .main-wrap {
    width: 100%;

    margin-top: @header-height;
    padding: 0;
  }

  .footer-wrap {
    height: auto;

    width: 100%;

    padding: 0;

    background: white;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>