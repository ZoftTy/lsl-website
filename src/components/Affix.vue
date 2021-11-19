<script setup>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

const { offset } = defineProps({
  offset: {
    type: Number,
    default: 0
  }
})

const Element = ref()
const position = ref()
const top = ref()

const updateState = (elementTop, scrollY) => {
  if (elementTop - scrollY <= offset) {
    position.value = 'fixed'
    top.value = offset + 'px'
  } else {
    position.value = ''
    top.value = ''
  }
}

onMounted(() => {
  const ElementOld = Element.value.offsetTop
  // 第一次执行
  updateState(ElementOld, window.scrollY)
  // 监听滚动事件
  window.addEventListener('scroll', () => {
    updateState(ElementOld, window.scrollY)
  })
})
</script>

<template>
  <div class="affix" ref="Element" :style="{ position: position, top: top }">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.affix {
  display: block;
  width: 100%;

  z-index: @index-2;
}
</style>