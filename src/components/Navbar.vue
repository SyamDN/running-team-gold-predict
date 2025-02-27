<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const emit = defineEmits(['scrollToProduk', 'scrollToArtikel'])

const route = useRoute()
const isSimulasiPage = route.path === '/simulasi'
const isHome = route.path === '/'
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-white border-b border-gray-200 p-4 z-50">
    <div class="flex justify-between items-center max-w-7xl mx-auto px-8">
      <!-- Logo -->
      <router-link to="/" class="flex items-center">
        <img src="/logo.png" alt="Logo" class="w-24 h-8 md:w-40 md:h-12" />
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden sm:flex items-center gap-10">
        <router-link
          v-if="!isSimulasiPage"
          to="/simulasi"
          class="text-[#FFFFFF] font-bold bg-[#4AA49C] p-3 rounded-lg hover:bg-white hover:text-[#4AA49C] hover:outline-[#4AA49C] outline-1"
        >
          Simulasi Prediksi
        </router-link>

        <router-link v-if="isSimulasiPage" to="/simulasi" class="text-[#4AA49C] font-bold">
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
      <router-link to="/simulasi" class="text-[#4AA49C] font-bold">Simulasi Prediksi</router-link>
    </div>
  </nav>

  <!-- Spacer untuk mencegah konten tertutup navbar -->
  <div class="h-16"></div>
</template>
