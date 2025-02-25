<script setup></script>

<template>
  <button class="flex items-center text-gray-700 text-sm font-medium font-poppins bg-white transition-colors duration-300">
    <svg class="w-8 h-4 mx-4 my-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
    </svg>
    Kembali
  </button>

  <div class="py-6 text-center font-poppins">
    <h1 class="text-gray-900 text-4xl font-medium">
      Prediksi Grafik <span class="font-bold text-yellow-600">Emas</span>
    </h1>
  </div>

  <div class="max-w-5xl mx-auto p-6">
    <!-- Container -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Chart Box -->
      <div class="col-span-2 bg-white shadow-md rounded-lg p-4 border">
        <div class="border-b pb-2 flex items-center justify-between font-poppins">
          <h2 class="text-lg font-semibold text-yellow-600">Grafik Harga Emas</h2>
          <!-- Time Buttons -->
        <div class="flex justify-end space-x-2 mt-4">
          <button class="px-3 py-1 border rounded-lg text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white">3Y</button>
          <button class="px-3 py-1 border rounded-lg text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white">2Y</button>
          <button class="px-3 py-1 border rounded-lg text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white">1Y</button>
          <button class="px-3 py-1 border rounded-lg text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white">6M</button>
        </div>
        </div>


        <!-- Chart Placeholder -->
        <div class="mt-4">
          <img src="../assets/BarLineChart.png" alt="Grafik Harga Emas" class="w-full" />
        </div>

      </div>

      <!-- Info Box -->
      <div class="bg-white shadow-md rounded-lg p-4 border">
        <h2 class="text-yellow-600 font-semibold mb-2">Informasi Emas</h2>
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

</template>
