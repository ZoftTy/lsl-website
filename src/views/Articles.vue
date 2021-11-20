<script setup>
import { marked } from 'marked'

import { ref } from '@vue/reactivity'

import { onMounted } from '@vue/runtime-core';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const route = useRoute()

const { category, sub, id } = route.params


const article = ref({})

const getData = async (id) => {
  const url = `http://zoft.work:1330/articles/${id}`
  const data = await fetch(url).then(res => res.json())

  // 将markdown渲染成html
  data.content = marked(data.content)

  return data
}

onMounted(async () => {
  article.value = await getData(id)
})

onBeforeRouteUpdate(async ({ params }) => {
  article.value = await getData(params.id)
})

</script>

<template>
  <div class="articles max-width-wrap">
    <el-row>
      <el-col :md="18" class="one-column">
        <h1 class="title">{{ article.title }}</h1>
        <span class="time">{{ article.date }}</span>
        <article class="markdown-body" v-html="article.content"></article>
      </el-col>
      <el-col :md="6" class="recommended-wrap">
        <h3>文章推荐</h3>
        <RecommendedItem
          v-for="item in [1, 2, 3, 4]"
          title="广东省高新技术职业培训学院"
          date="2020-03-17"
          image="https://xibaiimg.gz.bcebos.com/hongshulinjy/5e706f479f9c32.48762827.jpg"
          url="/education/vocational-education/article/4"
        />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.articles {
  padding: 60px 0;

  .one-column {
    .title {
      font-size: @title-1;

      text-align: center;
    }

    .time {
      display: block;

      margin-bottom: 20px;

      color: @color-grey;

      text-align: center;
    }
  }

  .recommended-wrap {
    .recommended {
      margin: 20px 0;
    }
  }
}
</style>