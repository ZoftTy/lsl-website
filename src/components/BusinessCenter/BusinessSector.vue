<script setup>
import GraphicLayout from 'layouts/GraphicLayout.vue'

const list = [
  '教育投资：联合专业院校，进行教育合作投资。',
  '合作办学：联合教育机构共同合作开设学校。',
  '专业共建：联合院校建设专业，以教学管理或专业设备进行投资。',
  '技能培训：承接院校的学生技能考证、职业培训。',
  '实习就业：对接学生专业对口的实习就业岗位安置。'
]
</script>

<template>
  <div class="business-sector max-width-wrap">
    <GraphicLayout>
      <!-- 标题 -->
      <template v-slot:title>业务板块</template>
      <!-- 图片 -->
      <template v-slot:image>
        <img src="~assets/images/businessCenter-05.png" alt="" />
      </template>
      <!-- 内容 -->
      <template v-slot:default>
        <ItemList :data="list" />
      </template>
    </GraphicLayout>
  </div>
</template>

<style lang="less" scoped>
.business-sector {
  padding-top: 60px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>