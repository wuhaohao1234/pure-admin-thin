<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "Detail"
});
const operatingRoomInfo = ref({
  details: ""
  // 其他相关字段
});
const recoveryRoomInfo = ref({
  postOpCondition: ""
  // 其他相关字段
});
const riskAssessmentData = ref([
  { factor: "年龄", assessment: "低" },
  { factor: "BMI", assessment: "中" }
  // 其他相关因素的评估信息
]);
const pressureUlcerData = ref([
  { factor: "感知觉", score: 3 },
  { factor: "潮湿程度", score: 2 }
  // 其他压疮危险因素评估的信息
]);
const preventiveMeasures = ref({
  mattressType: ""
  // 其他相关字段
});
</script>

<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card header="手术室交带血制品病区交皮肤完整情况">
          <!-- 在这里展示手术室相关信息 -->
          <el-form :model="operatingRoomInfo" label-width="120px">
            <el-form-item label="相关信息">
              <!-- 这里可以使用 Input、Textarea 等 Element UI 的输入组件 -->
              <el-input
                v-model="operatingRoomInfo.details"
                placeholder="请输入相关信息"
              />
            </el-form-item>
            <!-- 其他相关信息的表单项 -->
          </el-form>
        </el-card>
      </el-col>

      <el-col :span="24">
        <el-card header="手术交皮肤完整情况恢复室交皮肤完整皮肤">
          <!-- 在这里展示手术后的信息 -->
          <el-form :model="recoveryRoomInfo" label-width="120px">
            <el-form-item label="手术后状况">
              <!-- 这里可以使用 Input、Textarea 等 Element UI 的输入组件 -->
              <el-input
                v-model="recoveryRoomInfo.postOpCondition"
                placeholder="请输入手术后状况"
              />
            </el-form-item>
            <!-- 其他相关信息的表单项 -->
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-card header="危险因素评估">
          <!-- 在这里使用表格或其他 Element UI 组件展示危险因素评估的信息 -->
          <el-table :data="riskAssessmentData" style="width: 100%">
            <!-- 这里可以定义表格的列，显示危险因素评估的具体信息 -->
            <el-table-column prop="factor" label="因素" />
            <el-table-column prop="assessment" label="评估" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-card header="压疮危险因素评估">
          <!-- 在这里使用表格或其他 Element UI 组件展示压疮危险因素评估的信息 -->
          <el-table :data="pressureUlcerData" style="width: 100%">
            <!-- 这里可以定义表格的列，显示压疮危险因素评估的具体信息 -->
            <el-table-column prop="factor" label="因素" />
            <el-table-column prop="score" label="得分" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-card header="床垫、减压垫和预防性使用敷料">
          <!-- 在这里使用表格或其他 Element UI 组件展示相关信息 -->
          <el-form :model="preventiveMeasures" label-width="120px">
            <el-form-item label="床垫类型">
              <!-- 这里可以使用 Select、Radio 等 Element UI 的选择组件 -->
              <el-select
                v-model="preventiveMeasures.mattressType"
                placeholder="请选择床垫类型"
              >
                <el-option label="标准床垫" value="standard" />
                <el-option label="减压床垫" value="pressureRelief" />
                <!-- 其他床垫类型选项 -->
              </el-select>
            </el-form-item>
            <!-- 其他相关信息的表单项 -->
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.el-col {
  margin-bottom: 20px;
}
</style>
