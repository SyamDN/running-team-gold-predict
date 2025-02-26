<script setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartRef = ref(null)
let chartInstance = null

onMounted(() => {
  if (chartRef.value) {
    const ctx = chartRef.value.getContext('2d')

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt']
    const historicalData = [850000, 870000, 890000, 920000, 940000]
    const predictionData = [960000, 980000, 1000000, 1020000, 1040000]
    const fullData = [...historicalData, ...predictionData]

    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Harga Emas',
            data: fullData,
            borderColor: (ctx) => {
              const gradient = ctx.chart.ctx.createLinearGradient(0, 0, ctx.chart.width, 0)
              gradient.addColorStop(0, '#4AA49C')
              gradient.addColorStop(historicalData.length / fullData.length, '#4AA49C')
              gradient.addColorStop(historicalData.length / fullData.length, '#ECB55F')
              gradient.addColorStop(1, '#ECB55F')
              return gradient
            },
            borderWidth: 2,
            tension: 0.1,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  }
})
</script>

<template>
  <canvas ref="chartRef"></canvas>
</template>
