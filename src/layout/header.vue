<script setup lang="ts">
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
import passwordForm from "./components/passwordForm.vue";
const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const isShowPasswordForm = ref<boolean>(false);
// 获取路由表
const allRoutes = router.options.routes;

// 递归函数：根据路径找对应 route 配置
function findRouteByPath(path: string, routes: any[]): any | null {
  for (const r of routes) {
    if (r.path === path) return r;
    if (r.children) {
      const found = findRouteByPath(path, r.children);
      if (found) return found;
    }
  }
  return null;
}

// 生成面包屑项
const breadcrumbs = computed(() => {
  const paths = route.path.split("/").filter(Boolean);
  const matchedPaths: string[] = [];

  // 拼接路径层级
  paths.reduce((acc, cur) => {
    const newPath = `${acc}/${cur}`;
    matchedPaths.push(newPath);
    return newPath;
  }, "");

  // 特殊处理根路径
  if (matchedPaths.length === 0) {
    matchedPaths.push("/");
  }

  return matchedPaths.map((p) => {
    const matchedRoute = findRouteByPath(p, allRoutes as []);
    console.log(matchedPaths);
    return {
      path: p,
      title: matchedRoute?.meta?.title || p,
    };
  });
});

// 是否折叠侧边栏
const isFold = () => {
  userStore.isShowFold = !userStore.isShowFold;
};

// 修改密码
const editPassword = () => {
  isShowPasswordForm.value = true;
};
// 关闭窗口回调
const closeForm = () => {
  isShowPasswordForm.value = false;
};
</script>

<template>
  <div class="header">
    <div class="header-router">
      <i
        class="iconfont"
        :class="userStore.isShowFold ? 'icon-expand' : 'icon-fold'"
        style="color: black"
        @click="isFold"
      ></i>
      <div class="router-but">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item
            v-for="item in breadcrumbs"
            :key="item.path"
            :to="{ path: item.path }"
          >
            {{ item.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="header-user">
      <div class="search">
        <i class="iconfont icon-search" style="color: black"></i>
      </div>
      <div class="hint" style="margin-left: 20px">
        <i class="iconfont icon-hint" style="color: black"></i>
      </div>
      <div class="user">
        <el-avatar :size="30" src="" style="margin-left: 20px" />
        <el-dropdown style="margin-left: 10px">
          <span class="el-dropdown-link">
            admin <i class="iconfont icon-down"></i
          ></span>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="editPassword"
                >修改密码</el-dropdown-item
              >
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div v-if="isShowPasswordForm">
      <passwordForm
        :isShowPasswordForm="isShowPasswordForm"
        @close="closeForm"
      ></passwordForm>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 1);
  .header-router {
    flex: 1;
    display: flex;
    height: 70px;
    align-items: center;
    .router-but {
      margin-left: 20px;
    }
  }
  .header-user {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: end;
    .user {
      display: flex;
      align-items: center;
    }
  }
}
</style>
