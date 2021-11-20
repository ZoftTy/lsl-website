<script setup>
import TitleCenterLayout from 'layouts/TitleCenterLayout.vue'

const { height } = defineProps({
  height: String
})
</script>

<template>
  <!-- 标题 -->
  <TitleCenterLayout>
    <slot name="title"></slot>
  </TitleCenterLayout>
  <!-- layout -->
  <el-row class="layout-wrap" :style="{ height: height }">
    <el-col :xs="24" :md="12">
      <slot name="image"></slot>
    </el-col>
    <el-col class="content-wrap" :xs="24" :md="12">
      <slot></slot>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
.layout-wrap {
  padding-top: 50px;

  .content-wrap {
    padding-left: 50px;

    @media @sm {
      padding-left: 0;
      padding: 10px;
    }

    color: @color-grey;
  }
}
</style>