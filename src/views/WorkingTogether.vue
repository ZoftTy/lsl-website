<script setup>
import HeaderImageLayout from 'layouts/HeaderImageLayout.vue'

import { computed, reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

const route = useRoute()

const menuData = [
  {
    name: 'institutions',
    title: '合作院校',
    url: '/cooperation/institutions'
  },
  {
    name: 'enterprise',
    title: '校企合作',
    url: '/cooperation/enterprise'
  }
]

// 保存数据
const data = reactive({
  enterprise: {},
  institutions: {}
})

// 激活的选项
const active = computed(() => route.params.category)

// 获取数据的函数
const getData = async category => {
  const url = `/data/cooperation/${category}.json`
  data[category] = await fetch(url).then(res => res.json())
}

onMounted(() => {
  getData('institutions')
  getData('enterprise')
})
</script>

<template>
  <div class="corporate-culture">
    <!-- 头部图片和选项卡布局 -->
    <HeaderImageLayout>
      <!-- 图片 -->
      <template v-slot:image>
        <img src="/images/education-system-header.png" alt="" />
      </template>

      <!-- 菜单选择器 -->
      <template v-slot:memu>
        <MenuSelector :data="menuData" :active="active" />
      </template>
    </HeaderImageLayout>

    <!-- 合作院校-->
    <div class="list-wrap max-width-wrap" v-if="route.params.category == 'institutions'">
      <GraphicItem
        class="list-item"
        v-for="item in data.institutions"
        :key="item"
        :id="item.id"
        :title="item.title"
        :category="item.category"
        :icon="item.icon"
        :content="item.content"
        :date="item.date"
      />
    </div>

    <!-- 校企合作 -->
    <div class="max-width-wrap" v-if="route.params.category == 'enterprise'">
      <el-image :src="data.enterprise.icon"></el-image>
      <p>{{ data.enterprise.content }}</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list-wrap {
  padding: 50px 20px 60px 20px;

  .list-item {
    @media @md-up {
      width: 980px;
      height: 340px;
    }

    @media @sm {
      width: 80%;
    }

    @media @xs {
      width: 100%;
    }

    margin: 0 auto 70px auto;

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
}
</style>