<script setup>
import TitleCenterLayout from 'layouts/TitleCenterLayout.vue'
import { reactive } from 'vue';

// 新闻资讯
// GET: /articles?category=news&limit=6&nominate=true
const newsData = reactive([
  {
    id: 1,
    title: "职校、职高、技校、中专、大专的解读及区别",
    description: "职校、职高、技校、中专、大专的解读及区别",
    nominate: false,
    category: 17,
    cover: "http://dummyimage.com/234x60",
    date: "2020-03-17"
  },
  {
    id: 502,
    title: "测色色色",
    description: "12311111111111",
    nominate: false,
    category: 1,
    cover: "http://zoft.work:1330/images/61b174fb54bca.JPG",
    date: "2003-06-04"
  }
])
</script>

<template>
  <div class="news-information max-width-wrap">
    <TitleCenterLayout>新闻资讯</TitleCenterLayout>

    <el-row :gutter="15" class="item-wrap">
      <el-col
        class="item"
        v-for="(item, index) in newsData"
        :md="{ span: 4, offset: index == 0 ? 2 : 0 }"
      >
        <router-link to="/news/industry/article/1">
          <img src="~/assets/images/businessCenter-01.png" alt />
          <div class="content">
            <h4>{{ item.title }}</h4>
            <span class="line"></span>
            <p>{{ item.description }}</p>
          </div>
        </router-link>
      </el-col>
    </el-row>
    <el-row justify="center">
      <el-col class="item-controller">
        <el-pagination :pager-count="5" small background layout="prev, pager, next" :total="50"></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<style lang='less' scoped>
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