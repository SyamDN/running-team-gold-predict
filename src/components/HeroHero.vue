<script setup>
// Mengimpor komponen grafik harga emas
import GoldPriceChart from './GoldPriceChart.vue'
</script>

<template>
  <!-- Bagian judul dan deskripsi -->
  <div class="py-4 sm:py-6 text-center font-poppins mt-4 sm:mt-8 px-3 sm:px-4">
    <h1 class="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
      Perencanaan Cerdas untuk Masa Depan
      <br />
      <span class="font-bold text-[#ECB55F] text-2xl sm:text-3xl md:text-4xl">Emas</span>
      yang <span class="font-bold">Terencana</span>
    </h1>
    <p
      class="mt-3 sm:mt-4 text-gray-700 text-xs sm:text-sm md:text-lg max-w-5xl mx-auto leading-relaxed px-2"
    >
      Pantau pergerakan harga emas dan maksimalkan potensi keuntunganmu setiap hari!
      <br class="hidden sm:block" />
      <span class="sm:hidden"> </span>
      Dengan fitur prediksi BSI, kamu bisa merencanakan investasi emas dengan lebih mudah, aman, dan
      pastinya terencana.
    </p>
  </div>

  <!-- Tombol navigasi ke halaman simulasi keuntungan -->
  <div class="flex justify-center mt-3 sm:mt-4 px-3 sm:px-4">
    <RouterLink to="/simulasi">
      <button
        class="bg-[#ECB55F] text-white text-xs sm:text-sm md:text-base py-2 sm:py-3 px-4 sm:px-5 md:px-7 
               rounded-lg flex items-center gap-2 hover:bg-white transition outline-1 outline-[#ECB55F] 
               hover:text-[#ECB55F] hover:bg-white font-poppins font-medium"
      >
        Lihat Keuntungan Anda
      </button>
    </RouterLink>
  </div>

  <!-- Container untuk grafik harga emas -->
  <div class="flex justify-center items-center mt-4 sm:mt-8 px-3 sm:px-4">
    <div
      class="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 bg-white shadow-md rounded-lg p-3 sm:p-4 border 
             h-[250px] sm:h-[300px] md:h-[400px] flex flex-col justify-center items-center"
    >
      <div class="chart-container w-full flex-grow flex justify-center items-center">
        <!-- Menampilkan grafik harga emas dengan durasi default 1 tahun dan prediksi dimatikan -->
        <GoldPriceChart selectedDuration="1Y" :showPrediction="false" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Gaya untuk container grafik */
.chart-container {
  width: 100%;
  max-width: 60rem;
  height: auto;
  min-height: 100px;
}

/* Responsif: Ukuran minimum grafik lebih besar di layar kecil */
@media (max-width: 640px) {
  .chart-container {
    min-height: 180px;
  }
}
</style>
