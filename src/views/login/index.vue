<script setup lang="ts">
import { ref, reactive } from "vue";
const activeName = ref<string>("login");
const formInfo = reactive({
  name: "",
  password: "",
});
const autoLogin = ref(false);
</script>

<template>
  <div class="login">
    <div class="login-box">
      <div class="login-box-title">数码时间表管理系统</div>
      <div class="login-box-form">
        <el-tabs v-model="activeName" class="demo-tabs" :stretch="true">
          <el-tab-pane label="账户密码登录" name="login">
            <el-form ref="form" :model="formInfo">
              <el-form-item label="">
                <el-input
                  style="width: 434px; height: 40px"
                  v-model="formInfo.name"
                  placeholder="账户"
                >
                  <template #prefix>
                    <i
                      class="iconfont icon-user"
                      style="color: rgba(132, 208, 241, 1)"
                    ></i>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="">
                <el-input
                  style="width: 434px; height: 40px"
                  type="password"
                  show-password
                  v-model="formInfo.password"
                  placeholder="密码"
                >
                  <template #prefix>
                    <i
                      class="iconfont icon-key"
                      style="color: rgba(132, 208, 241, 1)"
                    ></i>
                  </template>
                </el-input>
              </el-form-item>
            </el-form>
            <el-checkbox v-model="autoLogin" size="large">自动登录</el-checkbox>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="login-box-btn">
        <el-button type="primary" class="btn">登录</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  position: fixed; /* 或 absolute */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/image/loginBg.png"); /* 你自己的图片路径 */
  background-size: cover; /* 保持比例填满 */
  background-position: center; /* 居中 */
  background-repeat: no-repeat;
  .login-box {
    display: flex;
    flex-direction: column; /* 👈 垂直排列 */

    position: absolute;
    width: 617px;
    height: 520px;
    background-color: rgba(255, 255, 255, 0.55);
    color: rgba(16, 16, 16, 1);
    left: 60%;
    top: 30%;
    .login-box-title {
      width: 355px;
      height: 50px;
      line-height: 50px;
      color: rgb(64, 127, 255);
      font-size: 36px;
      text-align: center;
      margin: 0 auto;
      margin-top: 62px;
      font-weight: 700;
    }
    .login-box-form {
      flex: 1;
      padding-top: 8px;
      :deep(.el-tabs__nav-wrap) {
        flex: 0 1 auto;
        margin: 0 auto;
      }
      .demo-tabs {
        padding-top: 30px;
        :deep(.el-tabs__content) {
          margin: 0 auto;
        }
      }
    }
    .login-box-btn {
      margin: 0 auto;
      margin-bottom: 87px;
      .btn {
        width: 434px;
        height: 40px;
        border-radius: 4px;
      }
    }
  }
}
</style>
