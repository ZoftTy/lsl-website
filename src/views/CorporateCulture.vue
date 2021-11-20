<script setup>
import HeaderImageLayout from 'layouts/HeaderImageLayout.vue'

import EnterpriseConcept from 'components/CorporateCulture/EnterpriseConcept.vue'
import EnterpriseValues from 'components/CorporateCulture/EnterpriseValues.vue'
import EnterpriseMission from 'components/CorporateCulture/EnterpriseMission.vue'

const menuData = [
  {
    name: 'concept',
    title: '企业理念',
    point: '#企业理念'
  },
  {
    name: 'values',
    title: '价值观',
    point: '#价值观'
  },
  {
    name: 'mission',
    title: '企业使命',
    point: '#企业使命'
  }
]

</script>

<template>
  <div class="corporate-culture">
    <!-- 头部图片和选项卡布局 -->
    <HeaderImageLayout>
      <template v-slot:image>
        <img src="/images/corporate-culture-header.png" alt />
      </template>

      <!-- 菜单选择器 -->
      <template v-slot:memu>
        <MenuSelector :data="menuData" :scroll="true" />
      </template>
    </HeaderImageLayout>

    <!-- 业务板块 -->
    <div id="企业理念">
      <EnterpriseConcept />
    </div>

    <!-- 院校开发 -->
    <div id="价值观">
      <EnterpriseValues />
    </div>

    <!-- 服务模式 -->
    <div id="企业使命">
      <EnterpriseMission />
    </div>
  </div>
</template>

<style lang="less" scoped>
</style>