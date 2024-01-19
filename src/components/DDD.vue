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
        color: ['#12739B', '#7C23A8'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['0', '3', '6', '9', '12', '15', '18', '21']
          }
        ],
        yAxis: [
          {
            type: 'value',
          }
        ],
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(9, 184, 202)'
                },
                {
                  offset: 1,
                  color: 'rgb(37, 37, 107)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [700, 1100, 900, 2000, 1000, 1700, 700, 800]
          },
          {
            name: 'Line 2',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(182, 42, 219)'
                },
                {
                  offset: 1,
                  color: 'rgb(79, 31, 130)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [700, 750, 1400, 1600, 1100, 2000, 1000, 600]
          }
        ],
      }

      chart.setOption(options)
    }
  }
}
</script>

<style>

</style>