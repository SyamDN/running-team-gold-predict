<script setup>
import AppNavbar from '@/components/AppNavbar.vue';
import FooterApp from '@/components/FooterApp.vue';

</script>

<template>
  <AppNavbar />
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
    <h1 class="text-gray-900 text-4xl font-medium">Prediksi Tren Emas 2025</h1>
  </div>

  <div class="max-w-4xl mx-auto p-6 font-poppins">
    <div>
      <img
        src="../assets/ArtikelEmas.png"
        alt="Combined Image"
        class="rounded-xl w-full shadow-md"
      />
    </div>

    <!-- Text Content -->
    <div class="mt-6 text-gray-700 text-justify">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Excepteur sint occaecat cupidatat non.
      </p>
      <p class="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Excepteur.
      </p>
    </div>

    <!-- Section Title -->
    <h2 class="mt-8 text-xl font-bold text-gray-900">Rincian Kegiatan MPKMB</h2>
    <p class="mt-2 text-gray-700 text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. \Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint
      occaecat cupidatat non proident, sunt in serunt mollit anim id est.
    </p>
  </div>
  <FooterApp />
</template>
