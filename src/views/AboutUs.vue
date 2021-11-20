<script setup>
import HeaderImageLayout from 'layouts/HeaderImageLayout.vue'

import CompanyProfile from 'components/AboutUs/CompanyProfile.vue'
import DevelopmentConcept from 'components/AboutUs/DevelopmentConcept.vue'
import ContactUs from 'components/AboutUs/ContactUs.vue'

import { computed, ref } from '@vue/reactivity'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

const route = useRoute()

const menuData = [
  {
    name: 'companyProfile',
    point: '#公司简介',
    title: '公司简介'
  },
  {
    name: 'developmentConcept',
    point: '#发展理念',
    title: '发展理念'
  },
  {
    name: 'contactUs',
    point: '#联系我们',
    title: '联系我们'
  }
]
</script>

<template>
  <div class="about-us">
    <!-- 头部图片和选项卡布局 -->
    <HeaderImageLayout>
      <template v-slot:image>
        <img src="/images/about-us-header.jpg" alt />
      </template>

      <!-- 菜单选择器 -->
      <template v-slot:memu>
        <MenuSelector :data="menuData" :offset="100" :scroll="true" />
      </template>
    </HeaderImageLayout>

    <!-- 公司简介 -->
    <div id="公司简介">
      <CompanyProfile />
    </div>

    <!-- 发展理念 -->
    <div id="发展理念">
      <DevelopmentConcept />
    </div>

    <!-- 联系我们 -->
    <div id="联系我们">
      <ContactUs />
    </div>
  </div>
</template>

<style lang="less" scoped>
</style>