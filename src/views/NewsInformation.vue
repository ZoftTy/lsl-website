<script setup>
import HeaderImageLayout from "layouts/HeaderImageLayout.vue";

import { computed, ref } from "@vue/reactivity";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { getArticle } from "@/apis";
const route = useRoute();

const menuData = [
  {
    name: "company",
    title: "公司新闻",
    url: "/news/company",
  },
  {
    name: "industry",
    title: "行业动态",
    url: "/news/industry",
  },
];

// 保存数据
const data = ref([]);
const total = ref(0);
const page = ref(1);
// 初始化
const init = (id, number) => {
  console.log(id, number);
  getArticle(id, 3, true, number).then((res) => {
    data.value = res;
  });
  getArticle(id, 0, true, number).then((res) => {
    total.value = res.length;
  });
};
// 激活的选项
const active = computed(() => route.params.category);
const categoryName = ref();
let id = ref();
// 获取数据的函数
const getData = async (category) => {
  categoryName.value = category;

  if (category === "company") {
    id.value = 20;
  } else if (category === "industry") {
    id.value = 22;
  }
  init(id.value, page.value);
};
// 页码改变
const pageNumberChange = (number) => {
  page.value = number;
  console.log(number, 123);
  init(id.value, page.value);
};
// 第一次执行
getData(route.params.category);

// 路由更新的时候执行
onBeforeRouteUpdate((to) => getData(to.params.category));

// 根据浏览器宽度更改第一个卡片的类型
const isSmall = ref(false);
const reloadCarouselType = (clientWidth) => {
  if (clientWidth > 768) {
    isSmall.value = false;
  } else {
    isSmall.value = true;
  }
};
// 第一次执行
reloadCarouselType(document.body.clientWidth);
// 监听浏览器宽度设置
window.onresize = () => reloadCarouselType(document.body.clientWidth);
</script>

<template>
  <div class="news-information">
    <!-- 头部图片和选项卡布局 -->
    <HeaderImageLayout>
      <template v-slot:image>
        <img src="/images/news-information-header.jpg" alt="" />
      </template>

      <!-- 菜单选择器 -->
      <template v-slot:memu>
        <MenuSelector :data="menuData" :active="active" />
      </template>
    </HeaderImageLayout>

    <!-- 公司新闻 & 行业动态 -->
    <div class="max-width-wrap">
      <el-row class="list-wrap">
        <!-- 遍历数据 -->
        <el-col
          class="item-wrap"
          v-for="(item, index) in data"
          :key="item"
          :md="index == 0 ? 24 : 12"
        >
          <GraphicItem
            class="item"
            :shadow="false"
            :background="false"
            :small="index == 0 ? isSmall : true"
            :id="item.id"
            :title="item.title"
            :category="categoryName"
            :icon="item.cover"
            :content="item.description"
            :date="item.date"
          />
        </el-col>
      </el-row>
    </div>

    <el-row justify="center">
      <el-col class="item-controller">
        <el-pagination
          :page-size="3"
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="pageNumberChange"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.list-wrap {
  padding: 50px 20px 60px 20px;

  .item-wrap {
    position: relative;

    padding: 0;

    margin-bottom: 40px;

    @media @sm {
      margin-bottom: 60px;
    }

    // 设置第一个卡片放大
    @media @sm-up {
      &:nth-child(1) {
        .item {
          height: 300px;
          margin-bottom: 50px;
        }

        &::after {
          display: none;
        }
      }
    }

    .item {
      @media @sm-up {
        height: 210px;
      }
    }

    // 线条
    &::after {
      content: "";

      position: absolute;

      left: 0;
      bottom: -20px;

      width: 100%;
      height: 1px;

      background-color: @color-grey;
      opacity: 0.4;
    }
  }
}

// 分页控制器位置
.item-controller {
  display: flex;
  justify-content: center;

  padding: 20px;

  --el-color-primary: @color-primary;
}
</style>
