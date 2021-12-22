<script setup>
import TitleCenterLayout from "layouts/TitleCenterLayout.vue";
import { useRouter } from "vue-router";
import { reactive, ref } from "@vue/reactivity";
import { getArticle } from "@/apis/index.js";
const router = useRouter();
const newList = ref([
  {
    image: "/images/carousel/1.jpg",
    date: "2020-03-17",
    title: "广东省高新技术职业培训学院",
    content:
      "广东省高新技术职业培训学院成立于2008年，是一所培养中、高级技能人才的省属全日制省重点技工学校。学校坐落在广州北站枢纽，广州新机场经济圈内，毗邻花都空港经济区、广州万达文化旅游城、花都汽车城、花都珠宝城、狮岭国际皮具城等大型工、商业园区，交通便利，环境优越，企业云集，可为学子提供良好的实习就业平台。",
    url: "/education/vocational-education/article/4",
  },
  {
    image: "/images/carousel/1.jpg",
    date: "2020-03-17",
    title: "广东省高新技术职业培训学院",
    content:
      "广东省高新技术职业培训学院成立于2008年，是一所培养中、高级技能人才的省属全日制省重点技工学校。学校坐落在广州北站枢纽，广州新机场经济圈内，毗邻花都空港经济区、广州万达文化旅游城、花都汽车城、花都珠宝城、狮岭国际皮具城等大型工、商业园区，交通便利，环境优越，企业云集，可为学子提供良好的实习就业平台。",
    url: "/education/vocational-education/article/4",
  },
  {
    image: "/images/carousel/1.jpg",
    date: "2020-03-17",
    title: "广东省高新技术职业培训学院",
    content:
      "广东省高新技术职业培训学院成立于2008年，是一所培养中、高级技能人才的省属全日制省重点技工学校。学校坐落在广州北站枢纽，广州新机场经济圈内，毗邻花都空港经济区、广州万达文化旅游城、花都汽车城、花都珠宝城、狮岭国际皮具城等大型工、商业园区，交通便利，环境优越，企业云集，可为学子提供良好的实习就业平台。",
    url: "/education/vocational-education/article/4",
  },
]);
const total = ref(0);
const page = ref(1);
const init = (number) => {
  getArticle(20, 5, true, number).then((res) => {
    newList.value = res;
  });
  getArticle(20, 0, true, number).then((res) => {
    total.value = res.length;
  });
};
init(page.value);
const toDetail = (id) => {
  router.push(`/news/industry/article/${id}`);
};
const pageNumberChange = (number) => {
  page.value = number;
  init(page.value);
};
</script>

<template>
  <div class="news-information max-width-wrap">
    <TitleCenterLayout>新闻资讯</TitleCenterLayout>

    <el-row :gutter="15" class="item-wrap">
      <el-col
        class="item"
        v-for="(item, index) in newList"
        :md="{ span: 4, offset: index == 0 ? 2 : 0 }"
      >
        <a href="javascript:;" @click="toDetail(item.id)">
          <img :src="item.cover" alt />
          <div class="content">
            <h4>{{ item.title }}</h4>
            <span class="line"></span>
            <p>
              {{ item.description }}
            </p>
          </div>
        </a>
      </el-col>
    </el-row>
    <el-row justify="center">
      <el-col class="item-controller">
        <el-pagination
          :page-size="5"
          small
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
// 新闻资讯
.news-information {
  padding-top: 20px;

  .item-wrap {
    padding-top: 50px;

    @media @md-up {
      height: 170px;
    }

    .item {
      position: relative;
      left: 0;
      top: 0;

      width: 100%;
      height: 120px;

      overflow: hidden;

      cursor: pointer;

      transition: transform 0.6s;

      @media @sm {
        margin-bottom: 20px;
      }

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;

        transition: box-shadow 0.6s;
      }

      &:hover {
        transform: translate(2px, -2px);

        img {
          box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.06);
        }

        .content {
          .line {
            left: 0;
          }

          p {
            opacity: 1;
          }

          &::after {
            opacity: 0.6;
          }
        }
      }

      .content {
        position: absolute;
        left: 0;
        top: 0;

        margin: 0 7.5px;
        padding: 15px 7.5px;

        width: calc(100% - 15px);
        height: 100%;

        overflow: hidden;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          z-index: @index-4;

          width: 100%;
          height: 100%;

          background-color: @color-primary;
          opacity: 0;
          transition: opacity 0.6s;
        }

        h4 {
          display: -webkit-box;

          position: relative;
          z-index: @index-3;

          font: @title-5 normal;
          color: white;

          margin-bottom: 10px;

          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }

        .line {
          position: absolute;

          left: calc(100% + 30px);
          top: calc(@title-5 + 25px);
          z-index: @index-3;

          width: 100%;
          height: 2px;
          background-color: white;

          border-radius: 1px;

          transition: left 0.6s;
        }

        p {
          display: -webkit-box;
          position: relative;

          z-index: @index-3;

          font-size: @content-font-size-2;
          color: white;
          overflow: hidden;

          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;

          opacity: 0;
          transition: opacity 0.6s;

          @media @xs {
            -webkit-line-clamp: 6;
          }
        }
      }
    }
  }

  .item-controller {
    display: flex;
    justify-content: center;

    padding: 20px;

    --el-color-primary: @color-primary;
  }
}
</style>
