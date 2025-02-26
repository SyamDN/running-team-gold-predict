<script setup></script>

<template>
  <div class="py-6 text-center font-poppins mt-8">
    <h1 class="text-gray-900 text-xl md:text-4xl font-bold">
      Perencanaan Cerdas untuk Masa Depan
      <br />
      <span class="font-bold text-[#ECB55F] text-xl md:text-4xl">Emas</span>
      yang <span class="font-bold">Terencana</span>
    </h1>
    <p class="mt-4 text-gray-700 text-base max-w-5xl mx-auto leading-relaxed md:text-lg">
      Pantau pergerakan harga emas dan maksimalkan potensi keuntunganmu setiap hari!
      <br />
      Dengan fitur prediksi BSI, kamu bisa merencanakan investasi emas dengan lebih mudah, aman, dan
      pastinya terencana.
    </p>
  </div>

  <div class="flex justify-center mt-4">
    <RouterLink to="/simulasi">
      <button
        class="bg-[#ECB55F] text-white text-sm sm:text-l py-3 px-7 sm:px-4 rounded-lg flex items-center gap-2 hover:bg-white transition outline-1 outline-[#ECB55F] hover:text-[#ECB55F] hover:bg-white font-poppins font-medium"
      >
        Lihat Keuntungan Anda
      </button>
    </RouterLink>
  </div>

  <div class="flex justify-center mt-8">
    <img src="../assets/grafik-statis.png" alt="Grafik Statis" class="object-cover w-1/2" />
  </div>
</template>
