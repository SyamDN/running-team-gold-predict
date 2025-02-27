<script setup>
import { ref, onMounted } from 'vue' // Mengimpor ref dan onMounted dari Vue
import axios from 'axios' // Mengimpor axios untuk HTTP request
import { useRouter, useRoute } from 'vue-router' // Mengimpor useRouter dan useRoute untuk navigasi
import Navbar from '../components/Navbar.vue' // Mengimpor komponen Navbar

const articlesDetails = ref(null) // Variabel reaktif untuk menyimpan detail artikel
const router = useRouter() // Mendapatkan instance router
const route = useRoute() // Mendapatkan instance route

// Fungsi untuk mengambil detail artikel berdasarkan ID
const getArticlesDetails = async () => {
  try {
    const id = route.params.id // Mengambil ID dari parameter route
    const response = await axios.get(`http://localhost:5000/articles/${id}`) // Mengirim request ke API
    articlesDetails.value = response.data // Menyimpan data artikel ke variabel reaktif
    console.log('Data Articles:', articlesDetails.value)
  } catch (error) {
    console.error('Error fetching articles:', error) // Menangani error saat request gagal
  }
}

onMounted(() => {
  getArticlesDetails() // Memanggil fungsi saat komponen ter-mount
})
</script>

<template>
  <Navbar /> <!-- Menampilkan komponen Navbar -->

  <!-- Tombol kembali -->
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <button
      @click="router.back()"
      class="flex items-center text-gray-700 text-sm font-medium font-poppins bg-white transition-colors duration-300 px-0 sm:4 md:4 lg:0 py-4 sm:py-10 md:py-10 lg:py-10"
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

  <!-- Menampilkan detail artikel jika tersedia -->
  <div v-if="articlesDetails" class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center font-poppins">
    <h1 class="text-gray-900 text-2xl sm:text-3xl lg:text-xl font-medium">
      {{ articlesDetails.title }}
    </h1>

    <div class="max-w-4xl mx-auto p-4 sm:p-6 font-poppins">
      <div class="flex justify-center">
        <img
          :src="articlesDetails.image"
          alt="Article Image"
          class="rounded-xl w-full sm:w-3/4 lg:w-1/2 shadow-md"
        />
      </div>

      <!-- Menampilkan deskripsi artikel -->
      <div class="mt-6 text-gray-700 text-justify">
        <p class="text-sm sm:text-base">
          {{ articlesDetails.description }}
        </p>
      </div>
    </div>
  </div>

  <!-- Menampilkan pesan loading jika data belum tersedia -->
  <div v-else class="text-center text-gray-500 py-10">
    <p>Loading...</p>
  </div>
</template>

