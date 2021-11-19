<script setup>
import TitleCenterLayout from 'layouts/TitleCenterLayout.vue'
</script>

<template>
  <div class="company-profile max-width-wrap">
    <TitleCenterLayout>公司简介</TitleCenterLayout>

    <el-row class="layout">
      <el-col>
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
        </p>
        <p>
          “聘歌云职场”是广州红树林教育科技有限公司联合各大高校打造的“资源整合+共享服务”的新型人力资源服务创新
          平台。整合高校人才资源、企业资源，构建一个新的人力资源聚合 体。
          根据多年办学经验和人才输出经历探索出院校和企
          业的人才对接新模式，实现“人才共享”。借助大平台的人力资源数据库及流量优势，抢占全国人才招聘市场，将“聘歌
          云职场”发展 成为一个人力资源服务市场的新型行业独角兽。
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.company-profile {
  padding: 50px 20px 0 20px;

  .layout {
    padding-top: 50px;

    p {
      font-size: @content-font-size-1;

      text-indent: calc(@content-font-size-1 * 2);

      margin-bottom: @content-font-size-1;
    }
  }
}
</style>