<script setup>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { pushLink } from 'utils/router.js'
import { useRoute } from 'vue-router'

const route = useRoute()

const { data, offset, scroll, active } = defineProps({
  // 菜单数据
  data: {
    type: Array,
    required: true
  },
  // 偏移的值
  offset: {
    type: Number,
    default: 0
  },
  // 是否是滚动监听类型
  scroll: {
    type: Boolean,
    default: false
  },
  // 激活的选项
  active: {
    type: [String, Object],
    default() {
      return ref('')
    }
  }
})

/**
 * 跳转到页面某处的函数
 * @param id 元素id
 * @param offset 偏移的值
 * @param isAnimation 是否有动画
 */
const scrollPosition = (id, offset = 0, isAnimation = true) => {
  const element = document.querySelector(id)

  if (element) {
    var elementPosition = element.offsetTop
    var offsetPosition = elementPosition - offset

    // 判断是否是在原来的那个位置
    if (elementPosition != offset) {
      window.scrollTo({
        top: offsetPosition,
        behavior: isAnimation ? 'smooth' : 'auto'
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
    scrollPosition(item.point, offset)
  } else {
    // 跳转路由
    pushLink(item.url)
  }
}

onMounted(() => {
  // 判断路由参数是否有指定跳转到那里去
  if (route.query.scroll) {
    // 如果有就跳转
    scrollPosition('#' + route.query.scroll, offset, false)
  }
})
</script>

<template>
  <ul class="menu-selector">
    <li
      class="item"
      v-for="item in data"
      :class="{ active: active == item.name || active.value == item.name }"
      :key="item"
      @click="click(item)"
    >{{ item.title }}</li>
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
