<script setup>
import HeaderImageLayout from "layouts/HeaderImageLayout.vue";

import { computed, ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { getArticle } from "@/apis/index.js";

const route = useRoute();

const menuData = [
  {
    name: "education",
    title: "职业教育",
    url: "/education/vocational-education",
    id: 18,
  },
  {
    name: "training",
    title: "职业培训",
    url: "/education/vocational-training",
    id: 21,
  },
];

// 保存数据
const data = ref([]);
const categoryName = ref("education");
// 激活的选项
const active = computed(() => route.params.category);

// 获取数据的函数
const getData = async (category) => {
  categoryName.value = category;
  let id = ref();
  if (category === "education") {
    id.value = 18;
  } else if (category === "training") {
    id.value = 21;
  }
  console.log(id.value);
  // const url = `/data/education-system/vocational-${category}.json`;
  // data.value = await fetch(url).then((res) => res.json());
  getArticle(id.value).then((res) => {
    data.value = res;
  });
};

// 第一次执行
getData(route.params.category);

// 路由更新的时候执行
onBeforeRouteUpdate((to) => getData(to.params.category));
</script>

<template>
  <div class="education-system">
    <!-- 头部图片和选项卡布局 -->
    <HeaderImageLayout>
      <template v-slot:image>
        <img src="/images/education-system-header.jpg" alt="" />
      </template>

      <!-- 菜单选择器 -->
      <template v-slot:memu>
        <MenuSelector :data="menuData" :active="active" />
      </template>
    </HeaderImageLayout>

    <!-- 职业教育 & 职业培训 -->
    <div class="list-wrap max-width-wrap">
      <GraphicItem
        class="list-item"
        v-for="item in data"
        :key="item"
        :id="item.id"
        :title="item.title"
        :category="categoryName"
        :icon="item.cover"
        :content="item.description"
        :date="item.date"
      />
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
