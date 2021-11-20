<script setup>
import GraphicLayout from 'layouts/GraphicLayout.vue'

const list = [
  '培养适合企业发展需求的合格职业人。',
  '成为中国知名培养和输送优秀职业人的基地。',
  '对客户负责、对奋斗者负责、对社会负责。'
]
</script>

<template>
  <div class="enterprise-mission max-width-wrap">
    <GraphicLayout>
      <!-- 标题 -->
      <template v-slot:title>企业使命</template>
      <!-- 图片 -->
      <template v-slot:image>
        <img src="~assets/images/corporateCulture-03.jpg" alt />
      </template>
      <!-- 内容 -->
      <template v-slot:default>
        <ItemList :data="list" />
      </template>
    </GraphicLayout>
  </div>
</template>

<style lang="less" scoped>
.enterprise-mission {
  padding-top: 60px;
  padding-bottom: 60px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>