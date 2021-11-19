<script setup>
import BusinessCenterLayout from 'layouts/BusinessCenterLayout.vue'
import ItemList from 'components/BusinessCenter/ItemList.vue'

const list = [
  '校友服务：为校友提供终生的免费就业推荐工作。',
  '职业核心能力培训体系：开展大学生职业核心能力培训；开展企业岗位能力提升培训。',
  '培训就业输出：常年开发合作伙伴及人才，确保人才输送；规范管理，服务好企业及人才。',
  '学校开发：合作办学、专业共建的深度合作；学生实习，就业安置合作；短期勤工俭学（双11，双12、寒暑假）合作。',
  '勤工俭学：组织工作以高标准，高要求的原则，确保我司与合作企业项目的顺利运行，多方位提升学生综合素质。'
]
</script>

<template>
  <div class="service-mode max-width-wrap">
    <BusinessCenterLayout height="var(--height)">
      <!-- 标题 -->
      <template v-slot:title>服务模式</template>
      <!-- 图片 -->
      <template v-slot:image>
        <img src="~assets/images/businessCenter-07.png" alt="" />
      </template>
      <!-- 内容 -->
      <template v-slot:default>
        <ItemList :data="list" />
      </template>
    </BusinessCenterLayout>
  </div>
</template>

<style lang="less" scoped>
.service-mode {
  --height: 450px;
  height: auto;

  @media @xs {
    --height: auto;
  }
  padding-top: 60px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>