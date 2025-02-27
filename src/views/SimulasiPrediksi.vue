<script setup>
import AppNavbar from '@/components/Navbar.vue'
import FooterApp from '@/components/Footer.vue'
import GoldPriceChart from '@/components/GoldPriceChart.vue'
import { ref, onMounted, computed } from 'vue'

const selectedButton = ref('1Y')
const selectedButtons = ref(null)

const latestData = ref(null)
const previousData = ref(null)
const priceDifference = ref(0)
const percentageChange = ref(0)
const isPositive = ref(true)
const goldPrices = ref([])
const predictionByDay = ref({})

// Fetch original prediction data
onMounted(async () => {
  try {
    // Original endpoint for the graph data
    const predictionResponse = await fetch('http://127.0.0.1:5000/prediction')
    const predictionData = await predictionResponse.json()

    if (predictionData.length > 0) {
      goldPrices.value = predictionData
      latestData.value = predictionData[0]
      previousData.value = predictionData[1]
      priceDifference.value = latestData.value.price - previousData.value.price
      percentageChange.value = ((priceDifference.value / previousData.value.price) * 100).toFixed(2)
      isPositive.value = priceDifference.value >= 0
    }

    // Fetch new data for day-by-day predictions
    const pricesResponse = await fetch('http://127.0.0.1:5000/prices')
    const pricesData = await pricesResponse.json()

    if (pricesData && pricesData.predictionByDay) {
      predictionByDay.value = pricesData.predictionByDay
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

// Format harga ke Rupiah
const formatCurrency = (value) => {
  return `Rp ${parseInt(value).toLocaleString('id-ID')},00`
}

// Map button labels to corresponding dates in predictionByDay
const buttonToDateMap = computed(() => {
  const dates = Object.keys(predictionByDay.value)
  return {
    '6 Hari': dates[0], // First date (6 days)
    '12 Hari': dates[1], // Second date (12 days)
    '18 Hari': dates[2], // Third date (18 days)
    '24 Hari': dates[3], // Fourth date (24 days)
  }
})

// Menghitung estimasi investasi berdasarkan durasi yang dipilih dari predictionByDay
const estimatedPrice = computed(() => {
  if (!selectedButtons.value || Object.keys(predictionByDay.value).length === 0)
    return 'Estimasi Tidak Tersedia'

  const selectedDate = buttonToDateMap.value[selectedButtons.value]

  if (!selectedDate || !predictionByDay.value[selectedDate]) {
    return 'Estimasi Tidak Tersedia'
  }

  return formatCurrency(predictionByDay.value[selectedDate])
})

// Calculate difference between estimated price and current price
// Calculate difference between estimated price and current price
const estimatedDifference = computed(() => {
  if (
    !estimatedPrice.value ||
    estimatedPrice.value === 'Estimasi Tidak Tersedia' ||
    !latestData.value
  )
    return null

  // Correct parsing of the future price from formatted currency
  // Instead of removing all non-digits, we should specifically handle the Indonesian format
  const futurePrice = predictionByDay.value[buttonToDateMap.value[selectedButtons.value]] || 0
  const currentPrice = parseInt(latestData.value.price)

  // Calculate the difference between future predicted price and today's price
  const diff = futurePrice - currentPrice
  const percentage = ((diff / currentPrice) * 100).toFixed(2)

  return {
    value: formatCurrency(Math.abs(diff)), // Using absolute value for display
    percentage: Math.abs(percentage), // Using absolute value for display
    isPositive: diff >= 0, // True if predicted price is higher than today's price
  }
})
</script>

<template>
  <AppNavbar />
  <!-- Back Button -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-8">
    <button
      @click="$router.push('/')"
      class="flex items-center text-gray-700 text-sm font-medium font-poppins bg-white transition-colors duration-300 px-4 py-1 md:px-60"
    >
      <svg
        class="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
      </svg>
      Kembali
    </button>
  </div>

  <div class="text-center font-poppins">
    <h1 class="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-medium">
      Prediksi Grafik <span class="font-bold text-yellow-600">Emas</span>
    </h1>
  </div>

  <div class="max-w-5xl mx-auto p-4 sm:p-6">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
      <!-- Chart section -->
      <div
        class="md:col-span-9 bg-white shadow-md rounded-lg p-4 border h-[400px] sm:h-[400px] flex flex-col"
      >
        <div class="border-b pb-2 flex items-center justify-between font-poppins">
          <h2 class="text-lg font-semibold text-yellow-600">Grafik Harga Emas</h2>
          <div class="flex space-x-2">
            <button
              v-for="(label, index) in ['1Y', '6M', '3M', '1M']"
              :key="index"
              @click="selectedButton = label"
              :class="
                selectedButton === label ? 'bg-[#ECB55F] text-white' : 'bg-gray-100 text-gray-700'
              "
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

      <!-- Information section -->
      <div
        class="md:col-span-3 bg-white shadow-md rounded-lg p-5 border flex flex-col justify-between"
      >
        <h2 class="text-lg font-semibold text-yellow-600 font-poppins mb-0.5">Informasi Emas</h2>
        <div class="border-t w-full my-2"></div>
        <div class="flex flex-col space-y-2 flex-grow">
          <div>
            <p class="text-gray-500">Harga Terkini</p>
            <p class="text-xl font-bold">
              {{ latestData ? formatCurrency(latestData.price) : 'Memuat...' }}
            </p>
          </div>
          <div>
            <p class="text-gray-500">Perubahan</p>
            <p
              :class="
                isPositive
                  ? 'text-green-600 font-semibold text-lg'
                  : 'text-red-600 text-lg font-semibold'
              "
            >
              {{ isPositive ? '▲' : '▼' }} {{ formatCurrency(priceDifference) }}
            </p>
          </div>
          <div>
            <p class="text-gray-500">Perubahan Terakhir</p>
            <p class="font-semibold text-lg">{{ latestData ? latestData.date : 'Memuat...' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Prediction per hari Box -->
  <div class="max-w-5xl mx-auto p-4 sm:p-6 font-poppins">
    <div class="bg-white shadow-md rounded-lg p-4 sm:p-6 border">
      <h2 class="text-lg font-semibold text-gray-800">Pilih durasi prediksi harga emas</h2>
      <p class="text-gray-500 text-sm mt-1">
        Lihat proyeksi harga emas untuk beberapa hari ke depan.
      </p>

      <div class="grid grid-cols-2 sm:flex sm:space-x-2 mt-4 gap-2">
        <button
          v-for="(label, index) in ['6 Hari', '12 Hari', '18 Hari', '24 Hari']"
          :key="index"
          @click="selectedButtons = label"
          :class="
            selectedButtons === label ? 'bg-[#4AA49C] text-white' : 'bg-gray-200 text-gray-700'
          "
          class="px-4 py-2 border rounded-lg flex-1"
        >
          {{ label }}
        </button>
      </div>

      <!-- Prediction Results -->
      <div
        class="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0 sm:space-x-10"
      >
        <div class="border-b border-gray-300 pb-2 w-full">
          <p class="text-gray-500 text-sm">Estimasi investasi setelah {{ selectedButtons }}</p>
          <p class="text-xl font-bold">{{ estimatedPrice }}</p>
        </div>
        <div class="border-b border-gray-300 pb-2 w-full">
          <p class="text-gray-500 text-sm">Perkiraan selisih dari hari ini</p>
          <p
            :class="
              estimatedDifference?.isPositive
                ? 'text-green-600 font-semibold'
                : 'text-red-600 font-semibold'
            "
          >
            {{ estimatedDifference?.isPositive ? '▲' : '▼' }} {{ estimatedDifference?.value }}
            <span
              class="text-base"
              :class="estimatedDifference?.isPositive ? 'text-green-600' : 'text-red-500'"
            >
              ({{ estimatedDifference?.percentage }}%)
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Warning Box -->
  <div class="max-w-5xl mx-auto p-4 sm:p-6">
    <div class="flex items-center p-4 rounded-lg bg-yellow-50 text-yellow-700">
      <svg
        class="w-5 h-5 mr-2 text-yellow-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>
      <span>Prediksi ini hanya sebagai referensi dan bukan dasar utama transaksi.</span>
    </div>
  </div>

  <FooterApp />
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 250px;
}
</style>
