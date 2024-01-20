<template>
  <div>
    <h2>个人信息展示</h2>

    <!-- 护士信息展示 -->
    <div style="margin: 10px 0">
      <p style="font-size: 20px; margin-bottom: 10px">姓名: {{ nurse.name }}</p>
      <p>账号: {{ nurse.account }}</p>
    </div>

    <!-- 护士管理的病人信息表格 -->
    <el-table :data="patients" style="width: 100%">
      <el-table-column prop="account" label="病人姓名" />
      <el-table-column prop="name" label="病人账号" />
      <el-table-column label="操作">
        <template #default>
          <el-button link type="primary" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Nurse {
  account: string;
  name: string;
}

interface Patient {
  account: string;
  name: string;
}

const nurse = ref<Nurse>({
  account: "admin",
  name: "王五"
});

const patients = ref<Patient[]>([
  {
    account: "111",
    name: "张三"
  },
  {
    account: "222",
    name: "李四"
  }
  // Add more patient data as needed
]);

// Fetch nurse and patient data from API or other sources if necessary

// Alternatively, you can use the route params to fetch data dynamically

// Fetch nurse and patient data using the nurseId
// Implement the necessary logic to fetch data from your API or store
</script>

<style scoped>
/* Add your component styles here if needed */
</style>
