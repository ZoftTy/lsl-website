<script setup>
import TitleCenterLayout from 'layouts/TitleCenterLayout.vue'
</script>

<template>
  <div class="corporate-culture max-width-wrap">
    <TitleCenterLayout>企业文化</TitleCenterLayout>

    <el-row class="list">
      <el-col class="list-content" :md="8" :sm="8">
        <img src="~assets/images/icon-01.png" alt="" />
        <div>
          <h2>企业使命</h2>
          <p>培养适合企业发展需求的合格职业人</p>
        </div>
      </el-col>
      <el-col class="list-content" :md="8" :sm="8">
        <img src="~assets/images/icon-02.png" alt="" />
        <div>
          <h2>企业愿景</h2>
          <p>成为中国知名培养和输送优秀职业人的基地</p>
        </div>
      </el-col>
      <el-col class="list-content" :md="8" :sm="8">
        <img src="~assets/images/icon-03.png" alt="" />
        <div>
          <h2>企业宗旨</h2>
          <p>对客户负责、对奋斗者负责、对社会负责</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang='less' scoped>
// 企业文化
.corporate-culture {
  width: 100%;

  padding: 60px 20px 0px 20px;

  .list {
    // 上边距
    margin-top: 50px;

    // 内容
    .list-content {
      display: flex;

      @media @sm {
        display: block;

        text-align: center;
      }

      @media @xs {
        margin-top: 30px;
      }

      & > div {
        padding: 0 16px 0 16px;

        h2 {
          font: @title-5 normal;
        }

        p {
          margin: 20px 0 0 0;
          font-size: @content-font-size-1;
        }
      }
    }
  }
}
</style>