<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import Aside from "./aside.vue";
import Header from "./header.vue";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
const asideWidth = ref("240px");
watch(
  () => userStore.isShowFold,
  () => (asideWidth.value = userStore.isShowFold ? "64px" : "240px")
);
</script>

<template>
  <div
    class="common-layout"
    :style="{ '--el-aside-width': asideWidth, '--el-header-height': '70px' }"
  >
    <el-container class="container">
      <el-aside class="aside-transition"><Aside></Aside></el-aside>
      <el-container style="min-width: 650px">
        <el-header style="height: 70px"><Header></Header></el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  .container {
    width: 100vw;
    height: 100vh;
    .main {
      // box-shadow: inset 0 0 0 20px rgb(246, 246, 246);
      /* 四周 20px 内边距 */
      // padding: 20px;
      min-width: 650px;
      /* 灰色阴影：X 方向偏移 0，Y 方向偏移 2px，模糊半径 8px，颜色 rgba(0,0,0,0.1) */
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      /* 可选：白色背景让阴影更明显 */
      background-color: #fff;
    }
    .aside-transition {
      transition: width 0.5s ease;
      overflow: hidden;
    }
  }
}
</style>
