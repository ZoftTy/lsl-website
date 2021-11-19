<script setup>
defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul class="item-wrap">
    <li class="item" v-for="(item, index) in data" :key="item">
      <span class="custom-icon">{{ index + 1 }}</span>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.item-wrap {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  height: 100%;

  list-style: none;

  .item {
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;

    background-color: @color-primary;

    border-radius: 4px;

    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

    color: white;

    .custom-icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;

      width: 20px;
      height: 20px;

      margin-right: 12px;

      color: white;

      border: 1px white solid;

      border-radius: 50%;
    }
  }
}
</style>