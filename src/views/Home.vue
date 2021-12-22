<script setup>
import CorporateCulture from "components/Home/CorporateCulture.vue";
import BusinessCenter from "components/Home/BusinessCenter.vue";
import EducationSystem from "components/Home/EducationSystem.vue";
import WorkingTogether from "components/Home/WorkingTogether.vue";
import NewsInformation from "components/Home/NewsInformation.vue";
import AboutUs from "components/Home/AboutUs.vue";

import { getCarouselList } from "@/apis";
import { reactive, ref } from "vue";
// 轮播图数据
const carouselList = ref([
  {
    date: "2021-12-08 20:12:34",
    url: "http://zoft.work:1330/images/61b06e2cabfc4.png",
  },
  {
    date: "2021-12-08 20:12:34",
    url: "http://zoft.work:1330/images/61b06e2cabfc4.png",
  },
  {
    date: "2021-12-08 20:12:34",
    url: "http://zoft.work:1330/images/61b06e2cabfc4.png",
  },
]);

getCarouselList().then((res) => {
  console.log(res);
  carouselList.value = res;
});
</script>

<template>
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel trigger="click" height="var(--carousel-height)">
      <el-carousel-item v-for="item in carouselList" :key="item">
        <img class="carousel-img" :src="item.url" alt="" />
      </el-carousel-item>
    </el-carousel>

    <!-- 企业文化 -->
    <CorporateCulture />

    <!-- 业务中心 -->
    <BusinessCenter />

    <!-- 教育体系 -->
    <EducationSystem />

    <!-- 携手合作 -->
    <WorkingTogether />

    <!-- 新闻资讯 -->
    <NewsInformation />

    <!-- 关于我们 -->
    <AboutUs />
  </div>
</template>

<style lang="less" scoped>
.home {
  --carousel-height: 620px;

  // 轮播图图片
  .carousel-img {
    width: 100%;
    height: var(--carousel-height);
    object-fit: cover;
  }
}
</style>
