<script setup>
import { ref, reactive } from 'vue'
import { pushLink } from 'utils/router.js'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navList = reactive([
  { title: '首页', path: '/home' },
  { title: '企业文化', path: '/culture' },
  { title: '业务中心', path: '/business' },
  { title: '教育体系', path: '/education' },
  { title: '携手合作', path: '/cooperation' },
  { title: '新闻资讯', path: '/news' },
  { title: '关于我们', path: '/about' }
])

const activeNavIndex = ref(0)

// 显示列表变量
const isShowList = ref(false)

// 路由守卫
router.afterEach(({ fullPath }) => {
  // 点击后关闭列表
  setTimeout(() => (isShowList.value = false), 100)

  const findNavIndex = navList.findIndex(({ path }) => {
    return path == '/' + fullPath.split('/')[1]
  })

  if (findNavIndex != -1) {
    activeNavIndex.value = findNavIndex
  }
})
</script>

<template>
  <el-row class="header max-width-wrap" justify="space-between">
    <!-- LOGO -->
    <el-col class="logo-wrap" :md="4" :sm="4" :xs="{ span: 16, offset: 4 }">
      <img class="logo" src="~assets/logo.png" alt="LOGO" />
    </el-col>

    <!-- 按钮 -->
    <el-col class="select-btn-wrap" :xs="4" @click="isShowList = !isShowList">
      <div class="select-btn" :class="{ active: isShowList }">
        <span></span>
      </div>
    </el-col>

    <!-- 导航列表 -->
    <el-col :md="20" :sm="20" :xs="24" class="header-list-wrap" :class="{ show: isShowList }">
      <el-row justify="end" class="header-list">
        <el-col
          class="header-list-content"
          :md="3"
          :sm="3"
          v-for="(item, index) in navList"
          :key="item.title"
        >
          <span
            class="link"
            @click="pushLink(item.path)"
            :class="{ active: activeNavIndex == index }"
          >{{ item.title }}</span>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
.header {
  height: 100%;

  align-items: center;

  text-align: center;

  .logo-wrap {
    display: flex;
    justify-content: center;

    height: 48px;
    .logo {
      display: block;
      height: 100%;
    }
  }

  @media @xs {
    // 背景遮罩
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: white;
    }
  }
}

.select-btn-wrap {
  display: none;
  justify-content: center;
  align-items: center;

  height: 32px;

  // 按钮
  .select-btn {
    display: flex;

    align-items: center;

    width: 32px;
    height: 32px;

    span {
      display: block;

      position: relative;

      width: 100%;
      height: 15%;

      background-color: black;

      border-radius: 2px;

      transition: background-color 0.3s;

      // 第一个线
      &::before {
        content: "";
        display: block;
        position: absolute;

        top: -10px;

        width: 100%;
        height: 4px;
        background-color: black;
        border-radius: 2px;
        transition: transform 0.4s ease-in-out, top 0.4s ease-in-out,
          bottom 0.4s ease-in-out;
      }

      // 第二个线
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;

        top: 10px;

        height: 4px;
        background-color: black;
        border-radius: 2px;
        transition: transform 0.4s ease-in-out, top 0.4s ease-in-out,
          bottom 0.4s ease-in-out;
      }
    }
  }

  .active {
    span:before {
      top: 0;
      transform: rotate(45deg);
    }
    span:after {
      top: 0;
      transform: rotate(-45deg);
    }

    span {
      background-color: white;
    }
  }

  @media @xs {
    display: flex;

    z-index: @index-1;
  }
}

.header-list-wrap {
  .header-list {
    .header-list-content {
      .link {
        position: relative;
        cursor: pointer;

        // 鼠标悬停状态
        &:hover {
          color: @color-primary;

          &::after {
            width: 100%;
          }
        }

        // 激活状态
        &.active {
          color: @color-primary;

          &::after {
            width: 100%;
          }
        }

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;

          width: 0%;
          height: 2px;

          transition: width 0.4s;

          background-color: @color-primary;
          border-radius: 8px;

          cursor: default;
        }
      }
    }
  }
}

@media @xs {
  .logo-wrap {
    display: flex;

    z-index: @index-1;

    height: @header-height;

    justify-content: center;
    align-items: center;

    .logo {
      display: block;
    }
  }

  .header-list-wrap {
    position: absolute;
    top: calc(-@header-list-height);
    left: 0;

    width: 100%;

    transition: top 0.3s, opacity 0.3s;

    opacity: 0;

    .header-list {
      .header-list-content {
        z-index: @index-1;

        padding: 15px 0 15px 0;
      }
    }

    &::after {
      content: "";
      display: block;

      position: absolute;
      top: 0;
      left: 0;
      z-index: @index-2;

      width: 100%;
      height: calc(@header-list-height + 20px);

      background-color: white;
    }
  }

  // 显示列表类
  .show {
    opacity: 1;
    top: @header-height;
  }
}
</style>
