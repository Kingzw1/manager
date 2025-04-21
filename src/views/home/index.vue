<script setup lang="ts">
import { ref, reactive } from "vue";
</script>

<template>
  <div class="main">
    <div class="main-header">
      <div class="main-header-left">
        <div class="welcome">👏 欢迎回来，admin</div>
        <div class="count">
          <div class="count-item">
            <div class="count-img">
              <i
                class="iconfont icon-a-instrumentpanel-line"
                style="color: rgb(117, 150, 246)"
              ></i>
            </div>
            <div class="count-num">
              <div class="count-title">表盘总数</div>
              <div class="num">0个</div>
            </div>
          </div>
          <div class="count-item">
            <div class="count-img">
              <i
                class="iconfont icon-user"
                style="color: rgb(180, 84, 254)"
              ></i>
            </div>
            <div class="count-num">
              <div class="count-title">用户数</div>
              <div class="num">0个</div>
            </div>
          </div>
          <div class="count-item">
            <div class="count-img">
              <i
                class="iconfont icon-message"
                style="color: rgb(253, 170, 116)"
              ></i>
            </div>
            <div class="count-num">
              <div class="count-title">意见数</div>
              <div class="num">0个</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-header-right">
        <div class="main-header-right-title">基础功能</div>
        <div class="main-header-right-content">
          <div class="main-header-right-content-item">
            <div class="icon">
              <i
                class="iconfont icon-a-instrumentpanel-line"
                style="font-size: 30px"
              ></i>
            </div>

            <span>表盘设置</span>
          </div>
          <div class="main-header-right-content-item">
            <div class="icon">
              <i class="iconfont icon-weather" style="font-size: 30px"></i>
            </div>

            <span>默认天气</span>
          </div>
          <div class="main-header-right-content-item">
            <div class="icon">
              <i class="iconfont icon-lamplight" style="font-size: 30px"></i>
            </div>

            <span>默认灯光</span>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 100%;
  .main-header {
    display: flex;
    height: 230px;
    .main-header-left {
      flex: 1;
      .welcome {
        padding-top: 33px;
        padding-bottom: 25px;
        padding-left: 2px;
        color: rgb(16, 16, 16);
        font-size: 20px;
      }
      .count {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid rgba(242, 243, 245, 1);
        border-bottom: 1px solid rgba(242, 243, 245, 1);
        margin-right: 100px;
        margin-left: 20px;
        .count-item {
          width: 200px;
          height: 120px;
          display: flex;
          align-items: center;
          .count-img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: rgba(247, 248, 250, 1);
            i {
              width: 80px;
              height: 80px;
              font-size: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .count-num {
            display: flex;
            height: 120px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
            .count-title {
              padding-bottom: 10px;
            }
          }
        }
      }
    }
    .main-header-right {
      width: 500px;
      padding: 67px 20px 0 20px;
      .main-header-right-content {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        .main-header-right-content-item {
          .icon {
            width: 70px;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: rgba(247, 248, 250, 1);
          }
        }
      }
    }
  }
}
</style>
