<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

const chartLine = ref();

onMounted(() => {
  initChart();
});

const initChart = () => {
  const myChart = echarts.init(chartLine.value);
  myChart.setOption(option);
};

// const chartDom = document.getElementById("main");
// const myChart = echarts.init(chartDom);
const option = {
  tooltip: {
    trigger: "item"
  },
  series: [
    {
      name: "医院",
      type: "pie",
      radius: ["40%", "70%"],
      emphasis: {
        label: {
          show: false,
          fontSize: 40,
          fontWeight: "bold"
        }
      },

      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: "病号" },
        { value: 735, name: "护士" }
      ]
    }
  ]
};

// option && myChart.setOption(option);

defineOptions({
  name: "Welcome"
});
</script>

<template>
  <div>
    <h1>登记人数</h1>
    <div ref="chartLine" style="width: 500px; height: 500px" />
  </div>
</template>
