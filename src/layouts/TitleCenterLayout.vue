<script setup>
</script>

<template>
  <el-row>
    <el-col class="title">
      <CostomTitle>
        <slot></slot>
      </CostomTitle>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
// 标题
.title {
  display: flex;
  // 局中
  justify-content: center;
}
</style>