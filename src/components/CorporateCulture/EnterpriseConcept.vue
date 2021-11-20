<script setup>
import GraphicLayout from 'layouts/GraphicLayout.vue'

const list = [
  '敬业：敬业就是要恪尽职守，尽职尽责，专业胜任。',
  '诚信：诚信就是诚实守信，一是要说真话，做实事，表里如一。',
  '创新：创新是公司生而固有的最根本的基因。',
  '共赢：与产业链企业互惠共赢，与全社会协同共赢。'
]
</script>

<template>
  <div class="enterprise-concept max-width-wrap">
    <GraphicLayout>
      <!-- 标题 -->
      <template v-slot:title>企业理念</template>
      <!-- 图片 -->
      <template v-slot:image>
        <img src="~assets/images/corporateCulture-01.jpg" alt />
      </template>
      <!-- 内容 -->
      <template v-slot:default>
        <ItemList :data="list" />
      </template>
    </GraphicLayout>
  </div>
</template>

<style lang="less" scoped>
.enterprise-concept {
  padding-top: 60px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>