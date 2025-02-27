<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  selectedDuration: {
    default: '1Y',
    type: String,
  },
  showPrediction: {
    default: true,
    type: Boolean,
  },
})

const chartRef = ref(null)
let chartInstance = null

const fetchData = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5000/prices')
    const data = await response.json()

    // Pastikan data tidak kosong
    if (!data.date || !data.price || data.date.length === 0 || data.price.length === 0) {
      console.warn('Data kosong atau tidak valid:', data)
      return
    }

    const sortedData = data.date
      .map((date, index) => ({
        date: new Date(date),
        price: data.price[index],
      }))
      .sort((a, b) => a.date - b.date)

    await processChartData(sortedData)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const processChartData = async (sortedData) => {
  let rangeDays = { '1Y': 365, '6M': 180, '3M': 90, '1M': 30 }
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - rangeDays[props.selectedDuration])

  const filteredData = sortedData.filter((item) => item.date >= cutoffDate)

  const labels = filteredData.map((item) =>
    new Intl.DateTimeFormat('id-ID', { month: 'short', year: '2-digit' }).format(item.date),
  )

  const prices = filteredData.map((item) => item.price)

  const predictionDays = 24
  const cutoffIndex = Math.max(0, labels.length - predictionDays)

  const actualLabels = labels.slice(0, cutoffIndex)
  const actualData = prices.slice(0, cutoffIndex)
  const dataWithoutPredictions = prices.slice(0, labels.length - predictionDays)
  const predictionLabels = labels.slice(cutoffIndex)
  const predictionData = prices.slice(cutoffIndex)

  await nextTick() // Pastikan canvas tersedia sebelum menggambar chart
  renderChart(labels, actualData, predictionData)
}

const renderChart = (labels, actualData, predictionData) => {
  if (!chartRef.value) {
    console.warn('Canvas belum tersedia')
    return
  }

  const ctx = chartRef.value.getContext('2d')

  if (chartInstance) {
    chartInstance.destroy()
  }

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: props.showPrediction
        ? [
            {
              label: 'Harga Emas',
              data: actualData,
              borderColor: '#4AA49C',
              backgroundColor: 'rgba(74, 164, 156, 0.3)',
              borderWidth: 2,
              tension: 0.3,
              fill: true,
              pointRadius: 0.5,
              pointHoverRadius: 1,
              pointBackgroundColor: '#4AA49C',
            },
            ...(predictionData.length > 0
              ? [
                  {
                    label: 'Prediksi',
                    data: [...new Array(actualData.length).fill(null), ...predictionData],
                    borderColor: '#ECB55F',
                    backgroundColor: 'rgba(236, 181, 95, 0.3)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true,
                    pointRadius: 0.5,
                    pointHoverRadius: 1,
                    pointBackgroundColor: '#ECB55F',
                    borderDash: [5, 5], // Garis putus-putus untuk prediksi
                  },
                ]
              : []),
          ]
        : [
            {
              label: 'Harga Emas',
              data: actualData,
              borderColor: '#4AA49C',
              backgroundColor: 'rgba(74, 164, 156, 0.3)',
              borderWidth: 2,
              tension: 0.3,
              fill: true,
              pointRadius: 0.5,
              pointHoverRadius: 1,
              pointBackgroundColor: '#4AA49C',
            },
          ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            display: true,
            maxTicksLimit: 15,
          },
        },
      },
    },
  })
}

// Fetch data saat komponen pertama kali dimuat
onMounted(fetchData)

console.log(props.showPrediction)

// Update chart saat `selectedDuration` berubah
watch(() => props.selectedDuration, fetchData)
</script>

<template>
  <canvas ref="chartRef"></canvas>
</template>
