<script setup>
</script>

<template>
  <div class="layout-header-img">
    <slot name="image"></slot>
  </div>

  <!-- 菜单选择器 -->
  <div class="layout-menu-selector-wrap">
    <Affix class="affix-wrap" :offset="70">
      <slot name="memu"></slot>
    </Affix>
  </div>
</template>

<style lang="less">
div.layout-header-img {
  height: 400px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

div.layout-menu-selector-wrap {
  height: 60px;

  & > div.affix-wrap {
    height: 60px;
  }
}
</style>