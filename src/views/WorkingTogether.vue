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
        <img src="/images/working-together-header.jpg" alt />
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
    <div class="max-width-wrap enterprise" v-if="route.params.category == 'enterprise'">
      <el-image class="image-wrap" :src="data.enterprise.icon"></el-image>
      <h4>（一）酒店服务类</h4>
      <p>广州合兴大酒店有限公司、广东湖景金阁饮食有限公司、广州花都竹缘美食、广州金骏酒店有限公司、广州金联福餐饮有限公司、广州民航大酒店、广州福荟来餐饮服务有限公司广州豪苑酒店有限公司、广州华钜君悦酒店有限公司、中南民航经济发展公司芙蓉会议中心</p>
      <h4>（二）化妆品轻工业类</h4>
      <p>广州一兆无纺日化有限公司、广州喜悦生物科技有限公司、丹姿集团（广州市科能化妆品科研有限公司）、广州艾蓓生物科技有限公司</p>
      <h4>（三）电子制造业类</h4>
      <p>广州科林电器有限公司、佛山鋐利电子有限公司、步步高教育电子有限公司、东莞清溪富崴电子厂、光宝电子（广州）有限公司、广东新宝电器股份有限公司、东莞欧珀精密电子有限公司、广州市尊浪电器有限公司、东莞库柏电子有限公司、深圳思纬市场资讯有限公司广州分公司、佛山顺德北滘塑料电器有限公司、比亚迪股份有限公司、广东泛仕达机电有限公司、广州南联航空食品有限公司、中山TCL制冷设备有限公司、海信广东空调有限公司、佛山振宣精密科技有限公司、广州市亿丰彩印包装有限公司、广州市博泰光学科技有限公司、广州帅著运动用品有限公司、上海苏博眼镜有限公司、广州奥博文具有限公司、广州市恒俊生态农业发展有限公司、广东云山仓储服务有限公司、广州碧源管业有限公司、广州市佳宏电子有限公司</p>
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

.enterprise {
  padding: 50px 20px 60px 20px;
  text-align: center;

  .image-wrap {
    width: 50%;

    margin-bottom: 20px;
  }
  h4 {
    margin-bottom: 12px;

    font: @title-5 normal;
    text-align: initial;
  }
  p {
    text-align: initial;
  }
}
</style>