<script setup>
import { ref } from '@vue/reactivity'
import { pushLink } from 'utils/router.js'

const { data, offset, scroll, active } = defineProps({
  data: {
    type: Array,
    required: true
  },
  offset: {
    type: Number,
    default: 0
  },
  scroll: {
    type: Boolean,
    default: false
  },
  active: {
    type: [String, Object],
    default() {
      return ref('')
    }
  }
})

// 滚动到指定位置的函数
const scrollPosition = (item, offset = 0) => {
  const element = document.querySelector(item.point)

  if (element) {
    var elementPosition = element.offsetTop
    var offsetPosition = elementPosition - offset

    // 判断是否是在原来的那个位置
    if (elementPosition != offset) {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}

// 监听页面滚动的函数
const scrollUpdatePosition = () => {
  const scroll = document.documentElement.scrollTop || document.body.scrollTop

  // 遍历所有锚点
  data.forEach((iterator, index) => {
    const element = document.querySelector(iterator.point)

    // 判断不为空
    if (!element) return false

    // 判断当前滚动距离是否大于元素的位置
    if (scroll >= element.offsetTop - offset) {
      active.value = iterator.name
    }
  })
}

if (scroll) {
  // 添加页面滚动监听事件
  window.addEventListener('scroll', scrollUpdatePosition)
}

// 点击函数
const click = item => {
  // 判断是否是滚动类型
  if (scroll) {
    // 滚动到指定位置
    scrollPosition(item, offset)
  } else {
    // 跳转路由
    pushLink(item.url)
  }
}
</script>

<template>
  <ul class="menu-selector">
    <li
      class="item"
      v-for="item in data"
      :class="{ active: active == item.name || active.value == item.name }"
      :key="item"
      @click="click(item)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<style lang="less" scoped>
.menu-selector {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  border-bottom: 1px solid #f4f4f4;

  padding: 20px;

  list-style: none;

  background-color: white;

  li {
    margin: 0 20px;

    font: @title-5 bold;
    text-align: center;

    cursor: pointer;

    &:hover {
      color: @color-primary;
    }

    &.active {
      color: @color-primary;
    }

    color: @color-grey;
  }
}
</style>