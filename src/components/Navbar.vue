<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const emit = defineEmits(['scrollToProduk', 'scrollToArtikel'])
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-white border border-gray-200 p-4 z-50">
    <div class="flex justify-between items-center max-w-7xl mx-auto px-8">
      <!-- Logo -->
      <router-link to="/" class="text-green-600 text-lg font-bold flex items-center pl-0 sm:pl-30">
        <img src="/logo.png" alt="Logo" class="w-24 h-8" />
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden sm:flex items-center gap-8 pr-30">
        <router-link to="/" class="text-black hover:text-green-600">Home</router-link>
        <button @click="emit('scrollToProduk')" class="text-black hover:text-green-600">
          Produk Emas
        </button>
        <button @click="emit('scrollToArtikel')" class="text-black hover:text-green-600">
          Artikel
        </button>
        <router-link
          to="/simulasi"
          class="text-white hover:text-[#005850] bg-[#4AA49C] hover:bg-white outline-1 outline outline-[#4AA49C] px-4 py-2 rounded-md"
        >
          Simulasi Prediksi
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="text-black sm:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-16 6h16"
          />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isOpen" class="sm:hidden mt-2 flex flex-col space-y-2 px-4">
      <router-link to="/" class="text-black hover:text-green-600">Home</router-link>
      <router-link to="/produk" class="text-black hover:text-green-600">Produk Emas</router-link>
      <router-link to="/artikel" class="text-black hover:text-green-600">Artikel</router-link>
      <router-link to="/simulasi" class="text-black hover:text-green-600"
        >Simulasi Prediksi</router-link
      >
    </div>
  </nav>

  <!-- Spacer untuk mencegah konten tertutup navbar -->
  <div class="h-16"></div>
</template>
