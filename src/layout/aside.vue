<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { computed, ref } from "vue";
import { useUserStore } from "@/store/user";
import Menu from "./menu/index.vue";
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

// 所有路由（layout 下的子路由）
const menuRoutes = computed(() => {
  const layoutRoute = router.options.routes.find((r) => r.path === "/");
  return layoutRoute?.children?.filter((r) => r.meta?.isShow) || [];
});
// 点击菜单时导航
const menuSelect = (index: string) => {
  router.push(index);
};
</script>

<template>
  <div class="aside">
    <div class="aside-logo">
      <img src="" alt="" style="width: 35px; height: 35px" />
      <p style="margin-left: 10px" v-if="!userStore.isShowFold">
        数码时间表管理后台
      </p>
    </div>
    <div class="aside-menu">
      <el-scrollbar class="scrollbar-demo">
        <el-menu
          :default-active="route.path"
          class="el-menu-vertical-demo"
          @select="menuSelect"
          router
          :collapse="userStore.isShowFold"
          text-color="#fff"
          background-color="rgba(0, 33, 64, 1)"
        >
          <Menu :menuRoutes="menuRoutes"></Menu
        ></el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside {
  height: 100vh;
  background-color: rgba(0, 33, 64, 1);
  .aside-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    background-color: rgba(0, 33, 64, 1);
    color: rgb(255, 255, 255);
  }
  .aside-menu {
    .scrollbar-demo {
      height: calc(100vh - 65px);
    }
    .el-menu-vertical-demo {
      border: 0;
    }
  }
}
</style>
