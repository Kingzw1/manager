<script setup lang="tsx">
import pagination from "@/components/paging/pagination.vue";
import { ElAvatar, ElButton, ElTag, type Column } from "element-plus";
import { ref, reactive } from "vue";
const pageData = ref({
  keyword: "",
});
const tableData = ref([]);
const disposeBtn = (rowData: any) => {};
const columns: Column<any>[] = [
  {
    key: "full_name",
    title: "序号",
    align: "center",
    width: 100,
    cellRenderer: ({ rowData }) => rowData.full_name,
    flexGrow: 1,
  },
  {
    key: "avatar",
    title: "头像",
    align: "center",
    width: 150,
    cellRenderer: ({ rowData }) => {
      return <ElAvatar shape="circle" size="default" src={rowData.avatar} />;
    },
  },
  {
    key: "mobile_number",
    title: "昵称",
    width: 200,
    align: "center",
    cellRenderer: ({ rowData }) => rowData.mobile_number,
    flexGrow: 1,
  },
  {
    key: "mobile_number",
    title: "性别",
    width: 200,
    align: "center",
    cellRenderer: ({ rowData }) => rowData.mobile_number,
    flexGrow: 1,
  },
  {
    key: "mobile_number",
    title: "联系方式",
    width: 200,
    align: "center",
    cellRenderer: ({ rowData }) => rowData.mobile_number,
    flexGrow: 1,
  },
  {
    key: "state",
    title: "状态",
    align: "center",
    width: 200,
    flexGrow: 1,
    cellRenderer: ({ rowData }) => {
      const tagType = rowData.state === 0 ? "danger" : "success";
      const tagText = rowData.state === 0 ? "禁用" : "启用";

      return <ElTag type={tagType}>{tagText}</ElTag>;
    },
  },
  {
    key: "operations",
    title: "操作",
    align: "center",
    cellRenderer: ({ rowData }) => (
      <div>
        <ElButton
          size="small"
          type="primary"
          plain
          onClick={() => disposeBtn(rowData)}
        >
          处理
        </ElButton>
      </div>
    ),
    width: 400,
    flexGrow: 1,
  },
];
</script>

<template>
  <div class="main">
    <div class="serach">
      <el-input
        v-model="pageData.keyword"
        style="width: 201px; height: 32px; padding-right: 10px"
        placeholder="搜索问题内容关键字"
      ></el-input>
      <el-button type="primary" style="margin-right: 25px"
        ><i
          class="iconfont icon-search"
          style="font-size: 15px; padding-right: 5px"
        ></i
        >搜索</el-button
      >
    </div>
    <div class="table">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            :columns="columns"
            :data="tableData"
            :width="width"
            :height="height"
          />
        </template>
      </el-auto-resizer>
    </div>
    <div class="pagination">
      <pagination></pagination>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .serach {
    display: flex;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .table {
    flex: 1;
  }
  .pagination {
    display: flex;
    justify-content: end;
    line-height: 80px;
    height: 80px;
    padding-right: 20px;
  }
}
</style>
