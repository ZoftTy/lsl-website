<script setup>
import GraphicLayout from 'layouts/GraphicLayout.vue'
</script>

<template>
  <div class="college-development max-width-wrap">
    <GraphicLayout>
      <!-- 标题 -->
      <template v-slot:title>院校开发</template>
      <!-- 图片 -->
      <template v-slot:image>
        <img src="~assets/images/businessCenter-06.png" alt="" />
      </template>
      <!-- 内容 -->
      <template v-slot:default>
        <p>
          　　通过开发合作院校，利用我们优势核心竞争力电子商务专业电子商务专业、幼儿教育专业、工业机器人专业项目化教学，共同促进合作项目。
        </p>
        <p>
          　　电子商务专业专注于培养具备现代管理和信息经济理念，掌握信息技术和电子服务综合技能，具有扎实的专业基础和良好的知识结构，具备一定的互联网创新创业素质，能适应现代社会商务运营、专业管理和技术服务需要的复合型、应用型、创新型专业人才。
        </p>
        <p>
          　　幼儿教育专业专注于培养具有良好思想道德品质、扎实的学前教育专业知识，能在保教机构、教育行政部门以及其他相关机构从事保教、研究和管理等方面工作的复合型人才。
        </p>
        <p>
          　　工业机器人专业专注于培养德、智、体、美全面发展，具有良好职业道德和人文素养，掌握机械制图、机械设计、电工与电子、电气控制、液压与气动、PLC应用技术、工业机器人应用技术等基本知识，具备工业机器人系统应用能力，从事工业机器人及工作站系统的安装与调试、维护与维修、技术与生产管理、服务与营销等工作的高素质技术技能人才。
        </p>
      </template>
    </GraphicLayout>
  </div>
</template>

<style lang="less" scoped>
.college-development {
  padding-top: 60px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>