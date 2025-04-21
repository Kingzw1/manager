<script setup lang="ts">
import { ref, watch } from "vue";
interface passwordForm {
  oldPassword: string;
  newPassword: string;
}
const formInfo = ref<passwordForm>({
  oldPassword: "",
  newPassword: "",
});

const isShowForm = ref<boolean>(false);
let { isShowPasswordForm = false } = defineProps({
  isShowPasswordForm: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["close"]);
const handleClose = () => {
  isShowForm.value = false;
  emits("close");
};
// 提交修改密码表单
const sumbitForm = () => {
  console.log("sumbitForm");
};
// 关闭窗口
const sumbitClose = () => {
  isShowForm.value = false;
  emits("close");
};
watch(
  () => isShowPasswordForm,
  (newValue) => {
    isShowForm.value = newValue;
  },
  { immediate: true }
);
</script>

<template>
  <el-dialog
    v-model="isShowForm"
    title="修改密码"
    width="500"
    @close="handleClose"
  >
    <el-form ref="form" :model="formInfo">
      <el-form-item label="旧密码">
        <el-input
          v-model="formInfo.oldPassword"
          placeholder="请输入旧密码"
        ></el-input> </el-form-item
      >‘
      <el-form-item label="新密码">
        <el-input
          v-model="formInfo.newPassword"
          placeholder="请输入新密码"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="sumbitClose">取消</el-button>
        <el-button type="primary" @click="sumbitForm"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped></style>
