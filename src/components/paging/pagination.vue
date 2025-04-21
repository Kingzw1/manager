<script setup lang="ts">
import { ref, reactive } from "vue";
defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 100,
  },
  size: {
    type: Number,
  },
});
const handleSizeChange = (val: number) => {
  console.log(`每页 ${val} 条`);
};
const handleCurrentChange = (val: number) => {
  console.log(`当前页: ${val}`);
};
</script>

<template>
  <div>
    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="[100, 200, 300, 400]"
      :size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="scss" scoped></style>
