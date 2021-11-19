<script setup>
import HeaderImageLayout from 'layouts/HeaderImageLayout.vue'
import BusinessSector from 'components/BusinessCenter/BusinessSector.vue'
import CollegeDevelopment from 'components/BusinessCenter/CollegeDevelopment.vue'
import ServiceMode from 'components/BusinessCenter/ServiceMode.vue'
import BusinessExpansion from 'components/BusinessCenter/BusinessExpansion.vue'

import { reactive } from '@vue/reactivity'

const menuSelectorData = reactive([])

const menuData = [
  {
    name: 'businessSector',
    point: '#业务板块',
    title: '业务板块'
  },
  {
    name: 'collegeDevelopment',
    point: '#院校开发',
    title: '院校开发'
  },
  {
    name: 'serviceMode',
    point: '#服务模式',
    title: '服务模式'
  },
  {
    name: 'businessExpansion',
    point: '#拓展业务',
    title: '拓展业务'
  }
]
</script>

<template>
  <div class="business-center">
    <!-- 头部图片和选项卡布局 -->
    <HeaderImageLayout>
      <!-- 图片 -->
      <template v-slot:image>
        <img src="/images/business-center-header.png" alt="" />
      </template>

      <!-- 菜单选择器 -->
      <template v-slot:memu>
        <MenuSelector :data="menuData" :offset="100" :scroll="true" />
      </template>
    </HeaderImageLayout>

    <!-- 业务板块 -->
    <div id="业务板块">
      <BusinessSector />
    </div>

    <!-- 院校开发 -->
    <div id="院校开发">
      <CollegeDevelopment />
    </div>

    <!-- 服务模式 -->
    <div id="服务模式">
      <ServiceMode />
    </div>

    <!-- 拓展业务 -->
    <div id="拓展业务">
      <BusinessExpansion />
    </div>
  </div>
</template>