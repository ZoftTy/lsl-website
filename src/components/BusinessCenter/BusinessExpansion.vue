<script setup>
import BusinessCenterLayout from 'layouts/BusinessCenterLayout.vue'
</script>

<template>
  <div class="business-expansion max-width-wrap">
    <BusinessCenterLayout>
      <!-- 标题 -->
      <template v-slot:title>拓展业务</template>
      <!-- 图片 -->
      <template v-slot:image>
        <img src="~assets/images/businessCenter-08.png" alt="" />
      </template>
      <!-- 内容 -->
      <template v-slot:default>
        <p>
          　　在加强高层次人才引进方面，重点引进学科领军人物和创新团队、高层次青年人才和急需紧缺青年专门人才。对紧缺的特殊人才，开辟专门渠道，实现精准引进，科学制定引才规划，明确引才目标任务、重点领域和优先次序。
        </p>
        <p>
          　　支持高层次人才承担科技计划项目及课题，深度参与科研攻关和技术创新，发挥用人主体作用，完善支持配套政策，为高层次人才在生活上提供更多便利，在工作上提供更多机会和更大舞台，创新高层次人才组织和管理模式。
        </p>
        <p>
          　　在人才输出方面，不断通过综合实训、学期实训、顶岗实训，加强学生动手操作能力，以此来提高学生的技能专业水平。在引领学生走向职场时，确保人才培养标准与真实产业需求无缝对接，提升学生的就业能力和创新创业能力。
        </p>
        <p>
          　　通过严格把控专业建设标准、人才培养方案、就业流程体系等服务环节，已经形成良好有序的精准生源吸引到应用人才输出的高效持续轨道，为各类型企业输出更多有用、实用的未来栋梁之才。
        </p>
      </template>
    </BusinessCenterLayout>
  </div>
</template>

<style lang="less" scoped>
.business-expansion {
  padding-top: 60px;
  padding-bottom: 60px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>