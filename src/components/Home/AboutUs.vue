<script setup>
</script>
<template>
  <div class="about-us max-width-wrap">
    <el-row class="layout-wrap">
      <el-col :xs="24" :md="12">
        <img src="~assets/images/aboutUs-01.png" alt="" />
      </el-col>
      <el-col class="content" :xs="24" :md="12">
        <h2>关于我们</h2>
        <h3>About Us</h3>

        <p>
          广州红树林教育科技有限公司隶属于广州市高新教育集团，专业从事教育投资和教学管理输出，业务涵盖技能培训、
          就业输出、专业共建、学校托管等领域。目前拥有合作职业院校 20余所，在册学生达10万+。
        </p>

        <p>
          公司以“打造有世界影响力的
          技能教育品牌”为目标，整合优质资源，探索出与职业学校联合办学的管理新模式。
          我们以对客户负责、对奋斗者负责、对社会负责的企业价值观，致力
          培养具有中国灵魂和国际视野的优秀学生为目标，
          致力成为中国知名培养和输送优秀职业人的基地，嫁接各类名校，植入先进理念，大胆实践，积极创新办学模式，目前已
          经总结和形成 了具有红树林特征的办学经验，取得了辉煌的成绩。
          “聘歌云职场”是广州红树林教育科技有限公司联合各大高校打造的“资源整合+共享服务”的新型人力资源服务创新
          平台。整合高校人才资源、企业资源，构建一个新的人力资源聚合 体。
          根据多年办学经验和人才输出经历探索出院校和企
          业的人才对接新模式，实现“人才共享”。借助大平台的人力资源数据库及流量优势，抢占全国人才招聘市场，将“聘歌
          云职场”发展 成为一个人力资源服务市场的新型行业独角兽。
        </p>

        <router-link to="/about" class="link">了解更多</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<style lang='less' scoped>
.about-us {
  padding: 60px 20px 60px 20px;

  .layout-wrap {
    padding-top: 50px;

    img {
      width: 100%;
    }

    .content {
      padding: 40px;

      @media @sm {
        padding: 10px;
      }

      h2 {
        font: @title-4 normal;

        @media @sm {
          text-align: center;
        }
      }
      h3 {
        margin-bottom: 20px;

        font: @title-5 normal;
        color: @color-grey;

        @media @sm {
          text-align: center;
        }
      }

      p {
        @fontSize: calc(@content-font-size-1 - 2px);
        font-size: @fontSize;

        text-indent: calc(@fontSize * 2);
        line-height: calc(@fontSize * 1.6);

        color: @color-grey;

        &:nth-child(4) {
          display: -webkit-box;

          overflow: hidden;

          text-overflow: ellipsis;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
      }

      .link {
        display: block;

        width: 150px;
        height: 40px;

        margin-top: 20px;

        @media @sm {
          margin: 20px auto 0px auto;
        }

        text-decoration: none;
        text-align: center;
        line-height: 40px;

        color: @color-grey;

        border: 1px @color-grey solid;

        transition: background-color 0.3s, color 0.3s;

        &:hover {
          color: white;
          background-color: @color-primary;

          border-color: @color-primary;
        }
      }
    }
  }
}
</style>