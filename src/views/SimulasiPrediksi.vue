<script setup>
import AppNavbar from '@/components/Navbar.vue'
import FooterApp from '@/components/Footer.vue'
import GoldPriceChart from '@/components/GoldPriceChart.vue'
import { ref, onMounted, computed } from 'vue'

// Menyimpan tombol durasi yang dipilih untuk grafik harga emas
const selectedButton = ref('1Y')

// Menyimpan tombol durasi prediksi harga emas
const selectedButtons = ref(null)

// Menyimpan data harga emas terbaru dan sebelumnya
const latestData = ref(null)
const previousData = ref(null)

// Menyimpan selisih harga emas dan persentase perubahan
const priceDifference = ref(0)
const percentageChange = ref(0)

// Menyimpan status perubahan harga (positif atau negatif)
const isPositive = ref(true)

// Menyimpan data harga emas untuk grafik
const goldPrices = ref([])

// Menyimpan data prediksi harga emas berdasarkan hari
const predictionByDay = ref({})

// Mengambil data prediksi harga emas dari API saat komponen dimuat
onMounted(async () => {
  try {
    // Mengambil data prediksi harga emas untuk grafik
    const predictionResponse = await fetch('http://127.0.0.1:5000/prediction')
    const predictionData = await predictionResponse.json()

    // Menyimpan data prediksi jika tersedia
    if (predictionData.length > 0) {
      goldPrices.value = predictionData
      latestData.value = predictionData[0] // Data terbaru
      previousData.value = predictionData[1] // Data sebelumnya

      // Menghitung selisih harga dan persentase perubahan
      priceDifference.value = latestData.value.price - previousData.value.price
      percentageChange.value = ((priceDifference.value / previousData.value.price) * 100).toFixed(2)
      isPositive.value = priceDifference.value >= 0
    }

    // Mengambil data prediksi harga emas berdasarkan hari
    const pricesResponse = await fetch('http://127.0.0.1:5000/prices')
    const pricesData = await pricesResponse.json()

    // Menyimpan data prediksi berdasarkan hari jika tersedia
    if (pricesData && pricesData.predictionByDay) {
      predictionByDay.value = pricesData.predictionByDay
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

// Memformat harga ke dalam mata uang Rupiah
const formatCurrency = (value) => {
  return `Rp ${parseInt(value).toLocaleString('id-ID')},00`
}

// Menyimpan pemetaan tombol ke tanggal prediksi
const buttonToDateMap = computed(() => {
  const dates = Object.keys(predictionByDay.value)
  return {
    '6 Hari': dates[0],
    '12 Hari': dates[1],
    '18 Hari': dates[2],
    '24 Hari': dates[3],
  }
})

// Menghitung estimasi harga emas berdasarkan tombol yang dipilih
const estimatedPrice = computed(() => {
  if (!selectedButtons.value || Object.keys(predictionByDay.value).length === 0)
    return 'Estimasi Tidak Tersedia'

  const selectedDate = buttonToDateMap.value[selectedButtons.value]

  if (!selectedDate || !predictionByDay.value[selectedDate]) {
    return 'Estimasi Tidak Tersedia'
  }

  return formatCurrency(predictionByDay.value[selectedDate])
})

// Menghitung selisih harga emas yang diprediksi dengan harga saat ini
const estimatedDifference = computed(() => {
  if (
    !estimatedPrice.value ||
    estimatedPrice.value === 'Estimasi Tidak Tersedia' ||
    !latestData.value
  )
    return null

  const futurePrice = predictionByDay.value[buttonToDateMap.value[selectedButtons.value]] || 0
  const currentPrice = parseInt(latestData.value.price)

  const diff = futurePrice - currentPrice
  const percentage = ((diff / currentPrice) * 100).toFixed(2)

  return {
    value: formatCurrency(Math.abs(diff)), // Menampilkan nilai absolut selisih harga
    percentage: Math.abs(percentage), // Menampilkan nilai absolut persentase
    isPositive: diff >= 0, // True jika harga prediksi lebih tinggi dari harga saat ini
  }
})
</script>

<template>
  <!-- Navbar -->
  <AppNavbar />

  <!-- Tombol Kembali -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-8">
    <button
      @click="$router.push('/')"
      class="flex items-center text-gray-700 text-sm font-medium font-poppins bg-white transition-colors duration-300 px-0 sm:4 md:4 lg:0 py-1"
    >
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
      </svg>
      Kembali
    </button>
  </div>

  <!-- Judul Halaman -->
  <div class="text-center font-poppins">
    <h1 class="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-medium">
      Prediksi Grafik <span class="font-bold text-yellow-600">Emas</span>
    </h1>
  </div>

  <!-- Bagian Grafik dan Informasi Emas -->
  <div class="max-w-5xl mx-auto p-4 sm:p-6">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
      <!-- Grafik Harga Emas -->
      <div class="md:col-span-9 bg-white shadow-md rounded-lg p-4 border h-[400px] flex flex-col">
        <div class="border-b pb-2 flex items-center justify-between font-poppins">
          <h2 class="text-lg font-semibold text-yellow-600">Grafik Harga Emas</h2>
          <div class="flex space-x-2">
            <button
              v-for="(label, index) in ['1Y', '6M', '3M', '1M']"
              :key="index"
              @click="selectedButton = label"
              :class="selectedButton === label ? 'bg-[#ECB55F] text-white' : 'bg-gray-100 text-gray-700'"
              class="px-2 py-1 border rounded-lg hover:bg-[#ECB55F] hover:text-white"
            >
              {{ label }}
            </button>
          </div>
        </div>
        <div class="chart-container flex-grow mt-4">
          <GoldPriceChart :selectedDuration="selectedButton"/>
        </div>
      </div>

      <!-- Informasi Harga Emas -->
      <div class="md:col-span-3 bg-white shadow-md rounded-lg p-5 border flex flex-col justify-between">
        <h2 class="text-lg font-semibold text-yellow-600 font-poppins mb-0.5">Informasi Emas</h2>
        <div class="border-t w-full my-2"></div>
        <div class="flex flex-col space-y-2 flex-grow">
          <div>
            <p class="text-gray-500">Harga Terkini</p>
            <p class="text-xl font-bold">{{ latestData ? formatCurrency(latestData.price) : 'Memuat...' }}</p>
          </div>
          <div>
            <p class="text-gray-500">Perubahan</p>
            <p :class="isPositive ? 'text-green-600 font-semibold text-lg' : 'text-red-600 text-lg font-semibold'">
              {{ isPositive ? '▲' : '▼' }} {{ formatCurrency(priceDifference) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <FooterApp />
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 250px;
}
</style>
