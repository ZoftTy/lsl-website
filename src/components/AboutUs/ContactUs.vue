<script setup>
import TitleCenterLayout from 'layouts/TitleCenterLayout.vue'
</script>

<template>
  <div class="contact-us max-width-wrap">
    <TitleCenterLayout>联系我们</TitleCenterLayout>

    <el-row class="layout">
      <el-col :md="12" class="map">
        <iframe width="100%" height="100%" src="/map.html" frameborder="0"> </iframe>
      </el-col>
      <el-col :md="12" class="contact-info">
        <div class="item">
          <div class="icon">1</div>
          <span>020-8699-3876</span>
        </div>
        <div class="item">
          <div class="icon">2</div>
          <span>020-8699-3876</span>
        </div>
        <div class="item">
          <div class="icon">3</div>
          <span>广州市花都区狮岭镇新花路9号</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.contact-us {
  padding: 60px 20px 60px 20px;

  .layout {
    padding-top: 50px;

    .map {
      height: 400px;
      padding: 40px;

      @media @sm {
        height: 300px;
        padding: 0px;
      }
    }

    .contact-info {
      display: flex;
      justify-content: center;
      flex-direction: column;

      @media @sm {
        align-items: center;
      }

      padding: 30px;

      .item {
        display: flex;
        align-items: center;

        margin: 20px 0;

        width: 300px;

        .icon {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 32px;
          height: 32px;

          margin-right: 20px;

          color: white;
          background-color: @color-primary;

          border-radius: 50%;
        }

        p {
          display: -webkit-box;
        }
      }
    }
  }
}
</style>