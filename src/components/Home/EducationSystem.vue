<script setup>
import TitleCenterLayout from 'layouts/TitleCenterLayout.vue'

import { reactive, ref } from '@vue/reactivity'

const educationCarousel = ref()

const educationData = reactive([
  {
    image: '/images/carousel/1.jpg',
    date: '2020-03-17',
    title: '广东省高新技术职业培训学院',
    content: '广东省高新技术职业培训学院成立于2008年，是一所培养中、高级技能人才的省属全日制省重点技工学校。学校坐落在广州北站枢纽，广州新机场经济圈内，毗邻花都空港经济区、广州万达文化旅游城、花都汽车城、花都珠宝城、狮岭国际皮具城等大型工、商业园区，交通便利，环境优越，企业云集，可为学子提供良好的实习就业平台。',
    url: '/education/vocational-education/article/4'
  },
  {
    image: '/images/carousel/2.jpg',
    date: '2020-03-17',
    title: '广东省高新技术职业培训学院',
    content: '广东省高新技术职业培训学院成立于2008年，是一所培养中、高级技能人才的省属全日制省重点技工学校。学校坐落在广州北站枢纽，广州新机场经济圈内，毗邻花都空港经济区、广州万达文化旅游城、花都汽车城、花都珠宝城、狮岭国际皮具城等大型工、商业园区，交通便利，环境优越，企业云集，可为学子提供良好的实习就业平台。',
    url: '/education/vocational-education/article/4'
  },
  {
    image: '/images/carousel/3.jpg',
    date: '2020-03-17',
    title: '广东省高新技术职业培训学院',
    content: '广东省高新技术职业培训学院成立于2008年，是一所培养中、高级技能人才的省属全日制省重点技工学校。学校坐落在广州北站枢纽，广州新机场经济圈内，毗邻花都空港经济区、广州万达文化旅游城、花都汽车城、花都珠宝城、狮岭国际皮具城等大型工、商业园区，交通便利，环境优越，企业云集，可为学子提供良好的实习就业平台。',
    url: '/education/vocational-education/article/4'
  },
])
</script>

<template>
  <div class="education-system">
    <TitleCenterLayout class="title">教育体系</TitleCenterLayout>

    <el-row class="max-width-wrap">
      <el-col class="education-carousel-wrap">
        <!-- 左边按钮 -->
        <div class="btn-wrap left" @click="educationCarousel.prev">
          <i class="iconfont icon-zuojiantou"></i>
        </div>

        <el-carousel
          trigger="click"
          indicator-position="outside"
          arrow="never"
          height="var(--carousel-height)"
          ref="educationCarousel"
        >
          <el-carousel-item v-for="item in educationData" :key="item">
            <el-row class="education-carousel">
              <el-col class="img-wrap" :md="12" :sm="24">
                <el-image class="carousel-img" :src="item.image" fit="cover"></el-image>
                <!-- <img class="carousel-img" :src="item.image" alt /> -->
              </el-col>
              <el-col class="content" :md="12" :sm="24">
                <span class="time">{{ item.date }}</span>
                <h2>{{ item.title }}</h2>
                <p>{{ item.content }}</p>
                <router-link class="link" :to="item.url">了解详情</router-link>
              </el-col>
            </el-row>
          </el-carousel-item>
        </el-carousel>

        <!-- 右边按钮 -->
        <div class="btn-wrap right" @click="educationCarousel.next">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<style lang='less' scoped>
// 教育体系
.education-system {
  margin-top: 60px;

  padding: 60px 90px 80px 90px;

  @media @sm {
    padding: 60px 0 80px 0;
  }

  // 背景
  background-image: url("/images/education-system.png");
  background-repeat: no-repeat;
  background-size: cover;

  // 标题
  .title {
    color: white;
  }

  // 轮播图包装
  .education-carousel-wrap {
    --carousel-height: 400px;

    @media @sm {
      --carousel-height: 800px;
    }

    @media @xs {
      --carousel-height: 400px;
    }

    position: relative;

    width: 100%;
    height: var(--carousel-height);

    margin-top: 50px;

    background-color: white;

    // 前进和后退按钮
    .btn-wrap {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 40%;

      width: 80px;
      height: 40px;

      transform: translateY(50%);

      background-color: @color-primary;
      color: white;

      cursor: pointer;

      &.left {
        left: -10%;
      }

      &.right {
        right: -10%;
      }

      @media @md {
        display: none;
      }
    }

    // 轮播图
    .education-carousel {
      height: 100%;

      // 图片
      .img-wrap {
        @media @xs {
          height: 50%;
        }

        overflow: hidden;

        .carousel-img {
          display: block;
          width: 100%;
          height: 100%;

          object-fit: cover;
        }
      }

      // 内容
      .content {
        padding: 40px 40px 20px 40px;

        @media @sm {
          padding: 20px 20px 20px 20px;
        }

        .time {
          color: @color-grey;

          @media @xs {
            font-size: calc(@title-5 - 6px);
          }
        }

        h2 {
          margin-top: 20px;

          font: @title-4 normal;

          @media @xs {
            font-size: @title-5;
            margin-top: 12px;
          }
        }

        p {
          display: -webkit-box;

          margin-top: 12px;

          overflow: hidden;
          color: @color-grey;

          text-overflow: ellipsis;
          -webkit-line-clamp: 8;
          -webkit-box-orient: vertical;

          @media @md {
            font-size: @content-font-size-1;
            -webkit-line-clamp: 6;
          }

          @media @xs {
            font-size: @content-font-size-2;
            -webkit-line-clamp: 2;
          }
        }

        .link {
          display: inline-block;

          margin-top: 18px;

          text-decoration: none;
          color: @color-primary;

          @media @xs {
            font-size: @content-font-size-2;
          }
        }
      }
    }
  }
}
</style>