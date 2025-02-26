<script setup>
import AppNavbar from '@/components/Navbar.vue'
import FooterApp from '@/components/Footer.vue'
import GoldPriceChart from '@/components/GoldPriceChart.vue'

import { ref } from 'vue'

const selectedButton = ref(null)

const selectButton = (value) => {
  selectedButton.value = value
}

const selectedButtons = ref(null)

const selectButtons = (value) => {
  selectedButtons.value = value
}
</script>

<template>
  <AppNavbar />
  <!-- Back Button -->
  <button
    @click="$router.back()"
    class="flex items-center text-gray-700 text-sm font-medium font-poppins bg-white transition-colors duration-300 px-4 py-3 md:px-60 md:py-10 hover:font-bold"
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

  <!-- Title -->
  <div class="py-4 text-center font-poppins">
    <h1 class="text-gray-900 text-4xl font-medium">
      Prediksi Grafik <span class="font-bold text-yellow-600">Emas</span>
    </h1>
  </div>

  <!-- Main Content -->
  <div class="max-w-5xl mx-auto p-6">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Chart Box -->
      <div class="col-span-2 bg-white shadow-md rounded-lg p-4 border">
        <div class="border-b pb-2 flex items-center justify-between font-poppins">
          <h2 class="text-lg font-semibold text-yellow-600">Grafik Harga Emas</h2>
          <!-- Time Buttons -->
          <div class="flex space-x-2">
            <button
              v-for="(label, index) in ['3Y', '2Y', '1Y', '6M']"
              :key="index"
              @click="selectButton(label)"
              :class="
                selectedButton === label ? 'bg-[#ECB55F] text-white' : 'bg-gray-100 text-gray-700'
              "
              class="px-2 py-1 border rounded-[8px] hover:bg-[#ECB55F] hover:text-white"
            >
              {{ label }}
            </button>
          </div>
        </div>

        <!-- Chart -->
        <div class="chart-container mt-4">
          <GoldPriceChart />
        </div>
      </div>

      <!-- Info Box -->
      <div class="bg-white shadow-md rounded-lg p-5 border">
        <h2 class="text-lg font-semibold text-yellow-600 font-poppins">Informasi Emas</h2>
        <div class="border-t w-full my-2"></div>
        <p class="text-gray-500">Harga Terkini</p>
        <p class="text-2xl font-bold">Rp 1.101.000,00</p>
        <p class="text-gray-500 mt-2">Perubahan</p>
        <p class="text-green-600 font-semibold">▲ Rp 2.000,00</p>
        <p class="text-gray-500 mt-2">Perubahan Terakhir</p>
        <p class="font-semibold">25 Feb 2025</p>
      </div>
    </div>
  </div>

  <!-- Prediction Section -->
  <div class="max-w-5xl mx-auto p-6 font-poppins">
    <div class="bg-white shadow-md rounded-lg p-6 border">
      <h2 class="text-lg font-semibold text-gray-800">Pilih durasi prediksi harga emas</h2>
      <p class="text-gray-500 text-sm mt-1">
        Lihat proyeksi harga emas untuk beberapa hari ke depan sesuai kebutuhan Anda.
      </p>

      <!-- Duration Buttons -->
      <div class="flex space-x-2 mt-4">
        <button
          v-for="(label, index) in ['6 Hari', '12 Hari', '18 Hari', '24 Hari']"
          :key="index"
          @click="selectButtons(label)"
          :class="
            selectedButtons === label ? 'bg-[#4AA49C] text-white' : 'bg-gray-100 text-gray-700'
          "
          class="px-4 py-2 border rounded-[36px] flex-1 outline-[#4AA49C] outline-1 hover:text-[#4AA49C] hover:bg-white"
        >
          {{ label }}
        </button>
      </div>

      <!-- Prediction Results -->
      <div class="flex justify-left items-center mt-6 space-x-10 w-20px">
        <div class="border-b border-gray-300 pb-2 w-full">
          <p class="text-gray-500 text-sm">Maka estimasi investasi setelah 6 hari</p>
          <p class="text-xl font-bold">Rp 1.302.000,00</p>
        </div>
        <div class="border-b border-gray-300 pb-2 w-full">
          <p class="text-gray-500 text-sm">Perkiraan selisih dari hari ini</p>
          <p class="text-green-600 font-semibold">
            ▲ Rp 201.000,00 <span class="text-base text-green-500">(+18.25%)</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Warning Box -->
  <div class="max-w-5xl mx-auto p-6">
    <div class="flex items-center p-4 rounded-2xl bg-yellow-50 text-yellow-700">
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
      <span
        >Prediksi ini disediakan sebagai referensi dan bukan sebagai dasar utama untuk
        bertransaksi.</span
      >
    </div>
  </div>
  <FooterApp />
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 300px;
}
</style>
