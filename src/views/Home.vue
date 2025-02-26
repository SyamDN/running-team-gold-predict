<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import HeroHero from '../components/HeroHero.vue'
import Card from '../components/Card.vue'
import CardProduct from '../components/CardProduct.vue'
import Footer from '../components/Footer.vue'

const articles = ref([])

const getArticles = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/articles')
    articles.value = response.data
    console.log('Data Articles:', articles.value)
  } catch (error) {
    console.error('Error fetching articles:', error)
  }
}

console.log(articles)
onMounted(() => {
  getArticles()
})
</script>

<template>
  <Navbar />
  <HeroHero />
  <section class="bg-transparent text-white py-12 px-6 mb-8">
    <div class="max-w-4xl mx-auto text-center text-black">
      <h2 class="text-3xl font-bold">Cara Terbaik Berinvestasi Emas di BSI</h2>
      <p class="text-lg mt-4 ">
        Temukan berbagai solusi investasi emas yang aman, mudah, dan terencana. Mulai dari cicilan
        ringan, gadai emas cepat cair, hingga investasi emas digital yang praktis di genggaman.
      </p>
      <div class="flex justify-center mt-4">
        <button
          class="bg-green-900 text-white py-2 px-6 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition"
        >
          Mulai Investasi Sekarang
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <CardProduct></CardProduct>
      </div>
    </div>
  </section>
  <section class="bg-green-900 text-white py-12 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold">Tetap Terdepan dengan Berita dan Tren Terbaru Seputar Emas</h2>
      <p class="text-lg mt-4">
        Dapatkan informasi terkini tentang harga emas, peluang investasi, dan tren pasar. Jadilah
        yang pertama tahu dan rencanakan investasi emas Anda dengan lebih cerdas.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <Card v-for="article in articles" :key="article.id" :article="article" />
      </div>
    </div>
  </section>

  <Footer />
</template>
