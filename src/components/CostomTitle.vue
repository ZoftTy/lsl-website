<script setup>
</script>

<template>
  <div class="title-wrap">
    <h1 class="title">
      <slot></slot>
    </h1>
    <span class="line"></span>
  </div>
</template>

<style lang="less" scoped>
.title-wrap {
  width: 160px;
  height: 45px;

  h1 {
    font-size: @title-3;
    font-weight: normal;

    text-align: center;
  }

  span {
    display: block;

    width: 100%;
    height: 2px;

    margin-top: 14px;

    background-color: @color-primary;
    border-radius: 1px;
  }
}
</style>