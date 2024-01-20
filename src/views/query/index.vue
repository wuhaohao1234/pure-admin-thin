<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Query"
});
const query = ref("");
const tableData = [
  {
    account: "111",
    name: "张三"
  },
  {
    account: "222",
    name: "李四"
  }
];
const handleScan = () => {
  router.push({
    path: "/detail/index"
  });
};
</script>

<template>
  <div>
    <div style="display: flex; align-items: center; margin-bottom: 20px">
      <span style="flex: none; margin-right: 20px">查询: </span>
      <el-input
        v-model="query"
        placeholder="输入病号姓名查询病号数据"
        clearable
        style="margin-right: 10px"
      />
      <el-button type="primary">确认</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="account" label="账号" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column label="操作">
        <template #default>
          <el-button link type="primary" size="small" @click="handleScan"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
