<script setup lang="ts">
import { ref } from "vue";
import { useColumns } from "./columns";
import { ElMessageBox } from "element-plus";
import { reactive } from "vue";
const dialogVisible = ref(false);
const isEdit = ref(false);
const { columns } = useColumns(dialogVisible, isEdit);
const formInline = reactive({
  account: "",
  password: "",
  type: ""
});
const selectValue = ref("1");
const selectOption = ref([
  {
    value: "1",
    label: "管理员"
  },
  {
    value: "2",
    label: "护士"
  },
  {
    value: "3",
    label: "用户"
  }
]);
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Account"
});
const handleClose = (done: () => void) => {
  ElMessageBox.confirm("确认关闭?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};

const tableData = [
  {
    account: "1111",
    type: "1",
    password: "2222"
  },
  {
    account: "2222",
    type: "2",
    password: "2222"
  }
];
</script>

<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      :title="isEdit ? '编辑' : '新增'"
      width="40%"
      :before-close="handleClose"
    >
      <el-form label-width="100px" :model="formInline">
        <el-form-item label="账户名">
          <el-input
            v-model="formInline.account"
            placeholder="输入账户名"
            clearable
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="formInline.password"
            placeholder="输入密码"
            clearable
            type="password"
          />
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="selectValue" placeholder="Select">
            <el-option
              v-for="item in selectOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
    <el-button
      type="primary"
      style="margin-bottom: 10px"
      @click="dialogVisible = true"
      >添加账户</el-button
    >
    <pure-table :data="tableData" :columns="columns" />
  </div>
</template>
