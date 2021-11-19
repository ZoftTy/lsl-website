<script setup>
import TitleCenterLayout from 'layouts/TitleCenterLayout.vue'

import { ref, reactive } from '@vue/reactivity'

// 携手合作-轮播图的key 自增加可以刷新轮播图
const workingTogetherKey = ref(0)
// 携手合作-轮播图类型
const workingTogetherType = ref()

// 刷新轮播图类型的函数
const reloadCarouselType = clientWidth => {
  // 判断窗口大小大于768
  if (clientWidth > 768) {
    // 改变轮播图类型为card
    workingTogetherType.value = 'card'
  } else {
    // 否则就是默认类型
    workingTogetherType.value = ''
  }
  // 更改key刷新组件
  workingTogetherKey.value++
}
// 第一次调用
reloadCarouselType(document.body.clientWidth)

// 监听窗口改变
window.onresize = () => reloadCarouselType(document.body.clientWidth)

const workingTogetherData = reactive([
  {
    image: '/images/working-together-01.png',
    title: '阳江职业技术学院',
    content:
      '阳江职业技术学院是经广东省人民政府批准设立，国家教育部备案，阳江市人民政府举办的综合性普通高等学校。我院以“崇德远志，精艺博才”为校训，按照“立足地方，以区域发展需要的专业为主体；培养可持续发展的高技能实操型人才；建设为区域发展做出重要贡献的高等职业院校”的办学定位，办优师范、办强工科，突出优势，凝聚特色，注重实践能力的培养和人文素质的教育。培养人民满意、社会需要、具有持续竞争力的高素质技术技能人才。',
    url: '#'
  },
  {
    image: '/images/working-together-02.png',
    title: '广东省高新技术高级技工学校',
    content:
      '广东省高新技术职业培训学院成立于2008年，是一所培养中、高级技能人才的省属全日制省重点技工学校。 　　学校坐落在广州北站枢纽，广州新机场经济圈内，毗邻花都空港经济区、广州万达文化旅游城、花都汽车城、花都珠宝城、狮岭国际皮具城等大型工、商业园区，交通便利，环境优越，企业云集，可为学子提供良好的实习就业平台。',
    url: '#'
  },
  {
    image: '/images/working-together-03.png',
    title: '广州市高新医药与食品技工学校',
    content:
      '广州市高新医药与食品技工学校（简称高新医药），是高新教育集团投入巨资千万进行升级改造，专注医药和食品两大方面，隶属广州市人力资源和社会保障局的全日制技工学校。 　　学校位于广州市番禺区市广路288号，与长隆欢乐世界、祈福新村、广东工业大学南校区相邻，公交车、地铁接驳巴士直达校门口，地理环境优越，交通十分便利。',
    url: '#'
  },
  {
    image: '/images/working-together-03.png',
    title: '广州市高新医药与食品技工学校',
    content:
      '广州市高新医药与食品技工学校（简称高新医药），是高新教育集团投入巨资千万进行升级改造，专注医药和食品两大方面，隶属广州市人力资源和社会保障局的全日制技工学校。 　　学校位于广州市番禺区市广路288号，与长隆欢乐世界、祈福新村、广东工业大学南校区相邻，公交车、地铁接驳巴士直达校门口，地理环境优越，交通十分便利。',
    url: '#'
  }
])
</script>

<template>
  <div class="working-together max-width-wrap">
    <TitleCenterLayout>携手合作</TitleCenterLayout>

    <el-row>
      <el-col class="carousel-wrap">
        <el-carousel
          :autoplay="false"
          arrow="never"
          :interval="4000"
          :type="workingTogetherType"
          :key="workingTogetherKey"
          indicator-position="outside"
          height="var(--carousel-height)"
        >
          <el-carousel-item class="carousel" v-for="item in workingTogetherData" :key="item">
            <img :src="item.image" alt="" />
            <div class="content">
              <h3>{{ item.title }}</h3>

              <p>{{ item.content }}</p>

              <a :href="item.url" class="link"
                >MORE <i class="iconfont icon-anniu-jiantouxiangyou_o"></i
              ></a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<style lang='less' scoped>
// 携手合作
.working-together {
  display: block;

  padding: 60px 20px;

  .carousel-wrap {
    --carousel-height: 600px;

    height: var(--carousel-height);

    @media @xs {
      --carousel-height: 500px;
    }

    margin-top: 50px;

    img {
      width: 100%;
      height: 50%;
      object-fit: cover;
    }

    .carousel {
      border-radius: 4px;

      background-color: white;

      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.06);

      cursor: default;

      img {
        display: block;
      }

      .content {
        position: relative;

        height: 50%;

        text-align: center;

        padding: 20px 26px 40px 26px;

        h3 {
          font: @title-4 normal;

          margin-bottom: 20px;
        }

        p {
          display: -webkit-box;

          overflow: hidden;
          color: @color-grey;

          text-overflow: ellipsis;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }

        a.link {
          display: inline-block;

          position: absolute;

          left: 0;
          bottom: 10%;

          width: 100%;

          color: @color-primary;

          text-decoration: none;
          text-align: center;
        }
      }
    }
  }
}
</style>