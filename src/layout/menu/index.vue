<script setup lang="ts" name="Menu">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
import Menu from "./index.vue";
const userStore = useUserStore();
const router = useRouter();
const { menuRoutes } = defineProps({
  menuRoutes: {
    type: Array,
    default: () => [],
  } as any,
});
console.log("4444444", menuRoutes);
</script>
<template>
  <template v-for="item in menuRoutes" :key="item.path">
    <el-menu-item v-if="!item.children" :index="item.path">
      <i
        class="iconfont"
        :class="item?.meta.icon"
        style="margin-right: 5px"
      ></i>
      <template #title>
        <span>{{ item?.meta.title }}</span>
      </template>
    </el-menu-item>
    <el-menu-item
      :index="item.children[0].path"
      v-if="item.children && item.children.length == 1"
    >
      <i
        class="iconfont"
        :class="item?.children[0].meta.icon"
        style="margin-right: 5px"
      ></i>
      <template #title>
        <span>{{ item?.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1"
    >
      <template #title>
        <i
          class="iconfont"
          :class="item?.meta.icon"
          style="margin-right: 5px"
        ></i>

        <span> {{ item?.meta.title }}</span>
      </template>
      <Menu :menuRoutes="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped></style>
