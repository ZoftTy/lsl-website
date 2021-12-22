<script script setup>
import { ref } from "vue";
import { pushLink } from "utils/router.js";

const props = defineProps({
  id: Number,
  title: String,
  category: String,
  icon: String,
  content: String,
  date: String,
  shadow: {
    type: Boolean,
    default: true,
  },
  background: {
    type: Boolean,
    default: true,
  },
  small: {
    type: Boolean,
    default: false,
  },
});
const { id, category } = props;

const url = ref(`/${category}/vocational-${category}/article/${id}`);
// console.log(category);
// 携手合作分类
if (category === "institutions" || category === "company" || category === "industry") {
  url.value = `/cooperation/${category}/article/${id}`;
}
</script>

<template>
  <div
    class="graphic-item"
    :class="{ shadow: shadow, background: background, small: small }"
  >
    <el-row class="layout-wrap">
      <el-col class="image-wrap" :md="12">
        <el-image class="image" :src="icon" fit="cover"></el-image>
      </el-col>
      <el-col class="content-wrap" :md="12">
        <h3>{{ title }}</h3>
        <span class="time">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.67"
            height="19.633"
            viewBox="0 0 17.67 19.633"
            v-if="date != undefined"
          >
            <path
              id="路径_21"
              data-name="路径 21"
              d="M118.462,77.026H116.5v1.963h1.963Zm3.927,0h-1.963v1.963h1.963Zm3.927,0h-1.963v1.963h1.963Zm1.963-6.871H127.3V68.191h-1.963v1.963H117.48V68.191h-1.963v1.963h-.982a1.954,1.954,0,0,0-1.953,1.963l-.01,13.743a1.963,1.963,0,0,0,1.963,1.963h13.743a1.969,1.969,0,0,0,1.963-1.963V72.118A1.969,1.969,0,0,0,128.278,70.154Zm0,15.706H114.535v-10.8h13.743Z"
              transform="translate(-112.572 -68.191)"
              fill="#999"
            />
          </svg>
          {{ date }}
        </span>
        <p class="content">{{ content }}</p>
        <a @click="pushLink(url)">了解详情</a>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.graphic-item {
  overflow: hidden;
  border-radius: 4px;

  // 是否有背景
  &.background {
    background-color: white;
  }

  // 是否有阴影
  &.shadow {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);

    transition: box-shadow 0.4s, transform 0.4s;
    &:hover {
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.16);
      transform: translateY(-4px);
    }
  }

  // mini版样式
  &.small {
    .layout-wrap {
      .content-wrap {
        padding: 10px 20px 0 20px;

        @media @xs {
          padding-top: 20px;
        }

        h3 {
          font: @title-4 normal;
          -webkit-line-clamp: 1;
        }

        .content,
        .time,
        .time > svg,
        a {
          font-size: @content-font-size-2;

          margin-bottom: 0;
        }
      }
    }
  }

  // 布局外包装
  .layout-wrap {
    height: 100%;

    // 图片外包装
    .image-wrap {
      width: 100%;
      height: 100%;

      .image {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    // 内容外包装
    .content-wrap {
      height: 100%;
      padding: 30px;

      // 标题
      h3 {
        display: -webkit-box;
        overflow: hidden;

        font: @title-3 normal;
        // 超出时省略号
        text-overflow: ellipsis;
        // 只允许两行
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .time {
        display: inline-flex;
        align-items: center;

        margin-top: 10px;
        margin-bottom: 20px;

        color: @color-grey;

        svg {
          margin-right: 10px;
        }
      }

      .content {
        display: -webkit-box;
        overflow: hidden;

        font-size: @content-font-size-1;

        color: @color-grey;
        // 超出时省略号
        text-overflow: ellipsis;
        // 只允许4行
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      a {
        display: inline-block;

        margin-top: 30px;
        margin-bottom: 20px;

        // 去掉下划线
        text-decoration: none;
        color: @color-primary;
        // 鼠标指针
        cursor: pointer;
      }
    }
  }
}
</style>
