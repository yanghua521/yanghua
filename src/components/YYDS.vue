<template>
  <div>
    <div class="text-container">
      日累计发电量
    </div>
    <div ref="chartContainer" style="width: 670px; height: 400px;"></div>
  </div>  
</template>
  
<script>
import * as echarts from 'echarts';

export default {
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const chartContainer = this.$refs.chartContainer;

      const mCharts = echarts.init(chartContainer);
      const xDataArr = ['张三', '李四', '王五', '小明', '茅台', '二妞', '大强'];
      const yDataArr = [88, 92, 63, 77, 80, 72, 86];

      const option = {
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'category',
          data: xDataArr,
        },
        series: [
          {
            name: '语文',
            type: 'bar',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' },
              ],
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' },
              ],
            },
            label: {
              show: true,
              rotate: 60,
              position: 'top',
            },
            barWidth: '30%',
            data: yDataArr,
          },
        ],
      };

      mCharts.setOption(option);
    },
  },
};
</script>
  
<style>
/* 样式 */
</style>
  