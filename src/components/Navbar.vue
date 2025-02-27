<script setup>
// Mengimpor ref dari Vue untuk mengelola state lokal
import { ref } from 'vue'
// Mengimpor useRoute dari Vue Router untuk mendapatkan informasi halaman saat ini
import { useRoute } from 'vue-router'

// State untuk menyimpan status menu mobile (apakah terbuka atau tertutup)
const isOpen = ref(false)

// Fungsi untuk mengubah status menu mobile
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Mendefinisikan event yang dapat dikirim dari komponen ini
const emit = defineEmits(['scrollToProduk', 'scrollToArtikel'])

// Mengambil informasi rute saat ini
const route = useRoute()

// Mengecek apakah halaman saat ini adalah "/simulasi"
const isSimulasiPage = route.path === '/simulasi'

// Mengecek apakah halaman saat ini adalah halaman utama "/"
const isHome = route.path === '/'
</script>

<template>
  <!-- Navbar utama, fixed di bagian atas dengan background putih dan border bawah -->
  <nav class="fixed top-0 left-0 w-full bg-white border-b border-gray-200 p-4 z-50">
    <div class="flex justify-between items-center max-w-7xl mx-auto px-8">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img src="/logo.png" alt="Logo" class="w-24 h-8 md:w-40 md:h-12" />
      </router-link>

      <!-- Navigasi untuk desktop (ditampilkan hanya jika layar lebih besar dari sm) -->
      <div class="hidden sm:flex items-center gap-10">
        <!-- Tombol ke halaman simulasi (hanya muncul jika bukan di halaman simulasi) -->
        <router-link
          v-if="!isSimulasiPage"
          to="/simulasi"
          class="text-[#FFFFFF] font-bold bg-[#4AA49C] p-3 rounded-lg 
                 hover:bg-white hover:text-[#4AA49C] hover:outline-[#4AA49C] outline-1"
        >
          Simulasi Prediksi
        </router-link>

        <!-- Link ke halaman simulasi jika saat ini berada di halaman simulasi -->
        <router-link v-if="isSimulasiPage" to="/simulasi" class="text-[#4AA49C] font-bold">
          Simulasi Prediksi
        </router-link>
      </div>

      <!-- Tombol menu untuk mobile -->
      <button @click="toggleMenu" class="text-black sm:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <!-- Ikon menu (hamburger) jika menu belum dibuka -->
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-16 6h16"
          />
          <!-- Ikon close (X) jika menu sudah dibuka -->
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Navigasi untuk mobile (hanya muncul saat tombol menu ditekan) -->
    <div v-if="isOpen" class="sm:hidden mt-2 flex flex-col space-y-2 px-4">
      <router-link to="/simulasi" class="text-[#4AA49C] font-bold">Simulasi Prediksi</router-link>
    </div>
  </nav>

  <!-- Spacer agar konten tidak tertutup oleh navbar yang fixed -->
  <div class="h-16"></div>
</template>
