<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { Chart, registerables } from 'chart.js'

// Registrasi modul Chart.js agar bisa digunakan
Chart.register(...registerables)

// Mendefinisikan properti yang diterima oleh komponen
const props = defineProps({
  selectedDuration: { default: '1Y', type: String }, // Durasi data yang akan ditampilkan (1Y, 6M, 3M, 1M)
  showPrediction: { default: true, type: Boolean }, // Apakah data prediksi akan ditampilkan atau tidak
})

// Referensi ke elemen canvas untuk Chart.js
const chartRef = ref(null)
let chartInstance = null // Variabel untuk menyimpan instance chart

const BACKEND_URL = import.meta.env.VITE_API_URL

// Fungsi untuk mengambil data dari API Flask
const fetchData = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/prices`) // Memanggil API Flask untuk mendapatkan data harga emas
    const data = await response.json() // Mengubah response menjadi JSON

    // Validasi: Pastikan data yang diambil tidak kosong atau tidak valid
    if (!data.date || !data.price || data.date.length === 0 || data.price.length === 0) {
      console.warn('Data kosong atau tidak valid:', data)
      return
    }

    // Mengubah data dari API menjadi array objek dan mengurutkan berdasarkan tanggal
    const sortedData = data.date
      .map((date, index) => ({ date: new Date(date), price: data.price[index] }))
      .sort((a, b) => a.date - b.date)

    // Memproses data yang telah diurutkan sebelum ditampilkan
    await processChartData(sortedData)
  } catch (error) {
    console.error('Error fetching data:', error) // Menampilkan error jika terjadi kesalahan dalam pengambilan data
  }
}

// Fungsi untuk memproses data yang telah diambil dari API
const processChartData = async (sortedData) => {
  // Menentukan jumlah hari berdasarkan durasi yang dipilih
  let rangeDays = { '1Y': 365, '6M': 180, '3M': 90, '1M': 30 }
  const cutoffDate = new Date() // Mendapatkan tanggal hari ini
  cutoffDate.setDate(cutoffDate.getDate() - rangeDays[props.selectedDuration]) // Menghitung batas tanggal yang akan ditampilkan

  // Filter data agar hanya menampilkan data dalam rentang waktu yang dipilih
  const filteredData = sortedData.filter((item) => item.date >= cutoffDate)

  // Membuat label tanggal untuk sumbu X pada grafik
  const labels = filteredData.map((item) =>
    new Intl.DateTimeFormat('id-ID', { month: 'short', year: '2-digit' }).format(item.date),
  )

  // Mengambil harga emas untuk setiap tanggal
  const prices = filteredData.map((item) => item.price)

  const predictionDays = 24 // Jumlah hari terakhir yang digunakan sebagai prediksi
  const cutoffIndex = Math.max(0, labels.length - predictionDays) // Menentukan indeks awal untuk prediksi

  // Memisahkan data aktual dan prediksi
  const actualData = prices.slice(0, cutoffIndex)
  const predictionData = prices.slice(cutoffIndex)

  await nextTick() // Menunggu agar elemen canvas tersedia sebelum merender chart
  renderChart(labels, actualData, predictionData)
}

// Fungsi untuk merender Chart.js dengan data yang telah diproses
const renderChart = (labels, actualData, predictionData) => {
  if (!chartRef.value) {
    console.warn('Canvas belum tersedia') // Pastikan elemen canvas tersedia sebelum menggambar chart
    return
  }

  const ctx = chartRef.value.getContext('2d') // Mendapatkan konteks 2D dari elemen canvas

  if (chartInstance) {
    chartInstance.destroy() // Menghapus chart lama jika sudah ada untuk menghindari duplikasi
  }

  chartInstance = new Chart(ctx, {
    type: 'line', // Jenis grafik: garis
    data: {
      labels: labels, // Label sumbu X (tanggal)
      datasets: props.showPrediction
        ? [
            {
              label: 'Harga Emas',
              data: actualData, // Data harga emas aktual
              borderColor: '#4AA49C', // Warna garis data utama
              backgroundColor: 'rgba(74, 164, 156, 0.3)', // Warna latar belakang
              borderWidth: 2, // Ketebalan garis
              tension: 0.3, // Efek lengkungan pada garis
              fill: true, // Mengisi area di bawah garis
              pointRadius: 0.5, // Ukuran titik data
              pointHoverRadius: 1, // Ukuran titik saat di-hover
              pointBackgroundColor: '#4AA49C', // Warna titik data
            },
            {
              label: 'Prediksi',
              data: [...new Array(actualData.length).fill(null), ...predictionData], // Data prediksi ditampilkan setelah data aktual
              borderColor: '#ECB55F', // Warna garis prediksi
              backgroundColor: 'rgba(236, 181, 95, 0.3)', // Warna latar belakang prediksi
              borderWidth: 2, // Ketebalan garis
              tension: 0.3, // Efek lengkungan pada garis
              fill: true, // Mengisi area di bawah garis prediksi
              pointRadius: 0.5, // Ukuran titik data
              pointHoverRadius: 1, // Ukuran titik saat di-hover
              pointBackgroundColor: '#ECB55F', // Warna titik prediksi
              borderDash: [5, 5], // Garis putus-putus untuk menunjukkan data prediksi
            },
          ]
        : [
            {
              label: 'Harga Emas',
              data: actualData, // Jika prediksi tidak ditampilkan, hanya menampilkan data aktual
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
      responsive: true, // Grafik akan menyesuaikan ukuran layar
      maintainAspectRatio: false, // Memungkinkan grafik memiliki proporsi fleksibel
      scales: {
        x: {
          ticks: { display: true, maxTicksLimit: 15 }, // Batas jumlah label di sumbu X agar tidak terlalu padat
        },
      },
    },
  })
}

// Memuat data saat komponen pertama kali dipasang di DOM
onMounted(fetchData)

// Memantau perubahan `selectedDuration`, dan memuat ulang data jika berubah
watch(() => props.selectedDuration, fetchData)
</script>

<template>
  <!-- Elemen canvas untuk menampilkan chart -->
  <canvas ref="chartRef"></canvas>
</template>
