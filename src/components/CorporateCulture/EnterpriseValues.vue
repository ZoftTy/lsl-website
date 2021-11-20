<script setup>
import GraphicLayout from 'layouts/GraphicLayout.vue'

const list = [
  '追求价值是我们工作的起点。',
  '创造价值是我们人生的动力。',
  '实现价值是我们恒久的追求。'
]
</script>

<template>
  <div class="enterprise-values max-width-wrap">
    <GraphicLayout>
      <!-- 标题 -->
      <template v-slot:title>价值观</template>
      <!-- 图片 -->
      <template v-slot:image>
        <img src="~assets/images/corporateCulture-02.jpg" alt />
      </template>
      <!-- 内容 -->
      <template v-slot:default>
        <ItemList :data="list" />
      </template>
    </GraphicLayout>
  </div>
</template>

<style lang="less" scoped>
.enterprise-values {
  padding-top: 60px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>