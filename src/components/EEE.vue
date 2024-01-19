<template>
  <div>
    <div ref="chart" style="height: 400px; width: 650px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  mounted() {
    this.initChart()
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`;
    },
    initChart() {
      const chart = echarts.init(this.$refs.chart)

      const options = {
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['0', '6', '9', '12', '15', '18', '21', '24']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Rainfall',
            type: 'bar',
            barWidth: 10,
            data: [1000, 1600, 2000, 1800, 1700, 2000, 2300, 1400],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 1, color: 'rgb(62, 84, 206)' },
                    { offset: 0, color: 'rgb(20, 243, 247)' }
                  ]
                )
              }
            }
          },
          {
            name: 'Evaporation',
            type: 'bar',
            barWidth: 10,
            data: [700, 1100, 1400, 1300, 1200, 1400, 1700, 1000],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: 'rgb(229, 60, 252)' },
                    { offset: 1, color: 'rgb(81, 60, 196)' }
                  ]
                )
              }
            }
          }
        ]
      };

      chart.setOption(options)
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
