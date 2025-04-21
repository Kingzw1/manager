<script setup lang="ts">
import { ref, reactive } from "vue";
const formInfo = ref({});
</script>

<template>
  <div class="setting-container">
    <el-form ref="form" :model="formInfo">
      <h3 style="padding-bottom: 10px">表盘设置</h3>
      <el-form-item label="默认表盘" style="padding-bottom: 20px; width: 300px">
        <el-select v-model="model" placeholder="">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <h3 style="padding-bottom: 10px">天气设置</h3>
      <el-form-item label="指定城市">
        <el-select v-model="model" placeholder="">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="padding-bottom: 20px" label="专属显示">
        <el-switch v-model="formInfo" />
      </el-form-item>
      <h3 style="padding-bottom: 10px">灯光设置</h3>
      <el-form-item label="色效设置">
        <el-color-picker v-model="formInfo" />
      </el-form-item>
      <el-form-item label="灯光电源">
        <el-switch v-model="formInfo" />
      </el-form-item>
      <el-form-item label="灯光模式">
        <el-radio-group v-model="formInfo.resource">
          <el-radio value="Sponsor">彩虹</el-radio>
          <el-radio value="Venue">极光</el-radio>
          <el-radio value="Venue">静态</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-button class="btn" type="primary">保持</el-button>
  </div>
</template>

<style lang="scss" scoped>
.setting-container {
  width: 600px;
  padding-left: 100px;
  .el-form-item {
    padding-left: 30px;
  }
  .btn {
    width: 300px;
    margin-left: 30px;
  }
}
</style>
