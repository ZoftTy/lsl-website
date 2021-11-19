<script setup>
import TitleCenterLayout from 'layouts/TitleCenterLayout.vue'
</script>

<template>
  <div class="business-center max-width-wrap">
    <TitleCenterLayout>业务中心</TitleCenterLayout>

    <el-row class="image-list">
      <el-col class="one-column" :md="16">
        <el-row class="one-row">
          <el-col class="item">
            <img src="~assets/images/businessCenter-01.png" alt="" />
            <h3>业务中心</h3>
          </el-col>
        </el-row>

        <el-row class="two-row">
          <el-col class="item-wrap" :md="12">
            <div class="item">
              <img src="~assets/images/businessCenter-02.png" alt="" />
              <a class="btn" href="">
                <i class="iconfont icon-youjiantou"></i>
              </a>
              <div class="content">
                <h4>业务板块</h4>
                <p>
                  教育投资：联合专业院校，进行教育合作投资；合作办学：联合教育机构共同合作开设学校；
                </p>
              </div>
            </div>
          </el-col>
          <el-col class="item-wrap" :md="12">
            <div class="item">
              <img src="~assets/images/businessCenter-03.png" alt="" />
              <a class="btn" href="">
                <i class="iconfont icon-youjiantou"></i>
              </a>
              <div class="content">
                <h4>业务板块</h4>
                <p>
                  教育投资：联合专业院校，进行教育合作投资；合作办学：联合教育机构共同合作开设学校；
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col class="two-column item-wrap" :md="8">
        <div class="item">
          <img src="~assets/images/businessCenter-04.png" alt="" />
          <a class="btn" href="">
            <i class="iconfont icon-youjiantou"></i>
          </a>
          <div class="content">
            <h4>业务板块</h4>
            <p>
              教育投资：联合专业院校，进行教育合作投资；合作办学：联合教育机构共同合作开设学校；
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang='less' scoped>
// 业务中心
.business-center {
  padding: 60px 20px 0 20px;

  .image-list {
    @media @sm-up {
      height: 580px;
    }

    // 上边距
    margin-top: 50px;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;

      border-radius: 2px;
    }

    // 元素
    .item {
      position: relative;
      overflow: hidden;

      height: 100%;

      // 图片过渡动画
      img {
        transition: transform 0.6s;
      }

      // 生成遮罩
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: @color-block;

        opacity: 0;
        transition: opacity 0.6s;
      }

      // 鼠标放在 .item 上面的时候
      &:hover {
        // 图片放大
        img {
          transform: scale(1.1);
        }

        // 显示按钮
        .btn {
          right: 40px;
        }

        // 显示遮罩
        &::after {
          opacity: 0.3;
        }
      }
    }

    // 按钮
    .btn {
      display: flex;

      justify-content: center;
      align-items: center;

      position: absolute;
      right: -56px;
      bottom: 50px;
      z-index: @index-2;

      width: 56px;
      height: 56px;

      background-color: white;
      color: black;
      border-radius: 50%;

      text-decoration: none;

      transition: right 0.6s;
      cursor: pointer;
    }

    // 内容
    .content {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: @index-3;

      width: 100%;
      height: 70px;

      padding: 10px;

      background-color: @color-primary;
      color: white;

      h4 {
        padding-bottom: 10px;

        font: @title-5 normal;
      }

      p {
        display: -webkit-box;
        width: 100%;

        overflow: hidden;

        font-size: @content-font-size-3;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }

    // 第一列
    .one-column {
      height: 100%;

      @media @sm-up {
        padding-right: 12px;
      }

      .one-row,
      .two-row {
        height: 50%;

        & > div {
          @media @sm {
            margin: 12px 0 12px 0;
          }
        }
      }

      .one-row {
        @media @sm-up {
          padding-bottom: 12px;
        }

        .item {
          h3 {
            position: absolute;
            top: 50%;
            left: 10%;
            transform: translate(-0%, -50%);
            z-index: @index-3;

            opacity: 0;
            transition: opacity 0.6s;

            font: @title-1 bold;
            color: white;
          }

          &:hover {
            h3 {
              opacity: 1;
            }
          }
        }
      }

      .two-row {
        @media @sm-up {
          padding-top: 12px;
        }

        div.item-wrap:nth-child(1) {
          @media @sm-up {
            padding-right: 12px;
          }
        }

        div.item-wrap:nth-child(2) {
          @media @sm-up {
            padding-left: 12px;
          }
        }
      }
    }

    // 第二列
    .two-column {
      @media @sm-up {
        height: 100%;
      }

      @media @sm {
        height: 400px;
        margin-top: 12px;
      }

      @media @xs {
        height: 250px;
      }

      div.item-wrap {
        @media @sm-up {
          padding-left: 12px;
        }

        @media @sm {
          padding-top: 12px;
        }
      }
    }
  }
}
</style>