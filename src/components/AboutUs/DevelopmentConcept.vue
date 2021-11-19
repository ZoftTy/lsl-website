<script setup>
import TitleCenterLayout from 'layouts/TitleCenterLayout.vue'
</script>

<template>
  <div class="development-concept max-width-wrap">
    <TitleCenterLayout>发展理念</TitleCenterLayout>

    <el-row class="layout">
      <el-col class="item" :md="8">
        <div class="circle">
          <span>使命</span>
        </div>
        <p>培养适合企业发展需求的合格职业人</p>
      </el-col>
      <el-col class="item" :md="8">
        <div class="circle">
          <span>愿景</span>
        </div>
        <p>成为中国知名培养和输送优秀职业人的基地</p>
      </el-col>
      <el-col class="item" :md="8">
        <div class="circle">
          <span>宗旨</span>
        </div>
        <p>对客户负责、对奋斗者负责、对社会负责</p>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.development-concept {
  padding: 60px 20px 0 20px;

  .layout {
    padding-top: 50px;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      @media @sm {
        margin-bottom: 40px;

        &:nth-last-child(1) {
          margin-bottom: 0;
        }
      }

      div.circle {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 130px;
        height: 130px;

        border: 2px @color-primary solid;
        border-radius: 50%;

        color: @color-primary;
      }

      p {
        margin-top: 20px;

        color: @color-grey;
        text-align: center;
      }
    }
  }
}
</style>