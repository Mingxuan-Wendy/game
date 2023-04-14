<template>
  <div class="Echarts">
    <div id="main" style="width: 100%; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "Echarts",
  methods: {
    myEcharts() {
      var myChart = this.$echarts.init(document.getElementById("main"));
      var option = {
        tooltip: {},
        xAxis: {
          data: [
            "2022-11",
            "2022-12",
            "2023-01",
            "2023-02",
            "2023-03",
            "2023-04",
          ],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style></style>
