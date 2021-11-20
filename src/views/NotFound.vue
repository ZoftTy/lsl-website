<script setup>
import { pushLink } from '../utils/router';

</script>

<template>
  <div class="not-found">
    <h1>404 Not Found</h1>
    <el-button @click="pushLink('/')">返回首页</el-button>
  </div>
</template>

<style lang="less" scoped>
.not-found {
  width: 100vw;
  height: calc(100vh - var(--header-height));

  padding: 20px;

  text-align: center;

  & > * {
    margin-bottom: 4vh;
  }

  h1 {
    margin: 10% 0;

    font-weight: normal;

    font-size: 5rem;

    color: var(--color-primary);
  }

  span {
    display: block;
  }
}
</style>