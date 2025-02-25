<script setup></script>

<template>
  <!-- Back Button -->
  <button class="flex items-center text-gray-700 text-sm font-medium font-poppins bg-white transition-colors duration-300 px-4 pt-8 pb-4">
    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            <button class="px-4 py-2 border rounded-[8px] text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white">3Y</button>
            <button class="px-4 py-2 border rounded-[8px] text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white">2Y</button>
            <button class="px-4 py-2 border rounded-[8px] text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white">1Y</button>
            <button class="px-4 py-2 border rounded-[8px] text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white">6M</button>
          </div>
        </div>

        <!-- Chart -->
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

  <!-- Prediction Section -->
  <div class="max-w-5xl mx-auto p-6 font-poppins">
    <div class="bg-white shadow-md rounded-lg p-6 border">
      <h2 class="text-lg font-semibold text-gray-800">Pilih durasi prediksi harga emas</h2>
      <p class="text-gray-500 text-sm mt-1">
        Lihat proyeksi harga emas untuk beberapa hari ke depan sesuai kebutuhan Anda.
      </p>

      <!-- Duration Buttons -->
      <div class="flex space-x-2 mt-4">
        <button class="px-4 py-2 border rounded-[36px] text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white flex-1">6 Hari</button>
        <button class="px-4 py-2 border rounded-[36px] text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white flex-1">12 Hari</button>
        <button class="px-4 py-2 border rounded-[36px] text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white flex-1">18 Hari</button>
        <button class="px-4 py-2 border rounded-[36px] text-gray-700 bg-gray-100 hover:bg-yellow-500 hover:text-white flex-1">24 Hari</button>
      </div>

      <!-- Prediction Results -->
      <div class="flex justify-between items-center mt-6">
        <div>
          <p class="text-gray-500 text-sm">Maka estimasi investasi setelah 6 hari</p>
          <p class="text-xl font-bold">Rp 1.302.000,00</p>
        </div>
        <div class="text-right">
          <p class="text-gray-500 text-sm">Perkiraan selisih dari hari ini</p>
          <p class="text-green-600 font-semibold">
            ▲ Rp 201.000,00 <span class="text-xs text-green-500">(+18.25%)</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Warning Box -->
  <div class="max-w-5xl mx-auto p-6">
    <div class="flex items-center p-4 rounded-2xl bg-yellow-50 text-yellow-700">
      <svg class="w-5 h-5 mr-2 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
      <span>Prediksi ini disediakan sebagai referensi dan bukan sebagai dasar utama untuk bertransaksi.</span>
    </div>
  </div>
</template>
