<script setup>
import { pushLink } from 'utils/router.js'

defineProps({
  image: String,
  title: String,
  date: String,
  url: String
})
</script>

<template>
  <el-row class="recommended" @click="pushLink(url)">
    <el-col class="image-wrap" :md="10">
      <img :src="image" alt />
    </el-col>
    <el-col class="content" :md="14">
      <h3>{{ title }}</h3>
      <span>{{ date }}</span>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
.recommended {
  max-height: 90px;

  background-color: white;
  cursor: pointer;
  transition: box-shadow 0.3s;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  }

  div.image-wrap {
    height: 90px;
    border-radius: 4px 0 0 4px;

    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: 12px;

    h3 {
      display: -webkit-box;

      margin-bottom: 6px;

      font: @title-5 normal;
      transition: color 0.3s;
      cursor: pointer;

      color: black;

      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      &:hover {
        color: @color-primary;
      }
    }

    span {
      color: @color-grey;
    }
  }
}
</style>