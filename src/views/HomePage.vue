<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Navbar from '../components/AppNavbar.vue'
import HeroHero from '../components/HeroHero.vue'
import Card from '../components/CardCard.vue'
import CardProduct from '../components/CardProduct.vue'
import FooterApp from '../components/FooterApp.vue'

const articles = ref([])
const produkSection = ref(null) // Reference to Produk section

const getArticles = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/articles')
    articles.value = response.data
    console.log('Data Articles:', articles.value)
  } catch (error) {
    console.error('Error fetching articles:', error)
  }
}

const scrollToProduk = () => {
  produkSection.value?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  getArticles()
})
</script>

<template>
  <div class="bg-gradient-to-t from-[#E6FAF9] to-white">
    <div class="bg-gradient-to-b from-[#E6FAF9] to-white">
      <Navbar @scrollToProduk="scrollToProduk" />
      <HeroHero />
    </div>

    <!-- Produk Section with ref -->
    <section ref="produkSection" class="bg-transparent text-black py-12 px-6 mb-8">
      <div class="max-w-4xl mx-auto text-center text-black">
        <h2 class="text-3xl font-bold">Cara Terbaik Berinvestasi Emas di BSI</h2>
        <p class="text-lg mt-4">
          Temukan berbagai solusi investasi emas yang aman, mudah, dan terencana. Mulai dari cicilan
          ringan, gadai emas cepat cair, hingga investasi emas digital yang praktis di genggaman.
        </p>
        <div class="flex justify-center mt-4">
          <a
            href="https://play.google.com/store/apps/details?id=co.id.bankbsi.superapp&hl=id"
            target="_blank"
            class="bg-[#4AA49C] text-white py-2 px-6 rounded-lg flex items-center gap-2 hover:text-[#4AA49C] hover:bg-white outline-1 outline-[#4AA49C] transition"
          >
            Mulai Investasi Sekarang
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <CardProduct></CardProduct>
        </div>
      </div>
    </section>

    <section class="text-white py-12 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-black">
          Tetap Terdepan dengan Berita dan Tren Terbaru Seputar Emas
        </h2>
        <p class="text-lg mt-4 text-black">
          Dapatkan informasi terkini tentang harga emas, peluang investasi, dan tren pasar. Jadilah
          yang pertama tahu dan rencanakan investasi emas Anda dengan lebih cerdas.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <Card v-for="article in articles" :key="article.id" :article="article" />
        </div>
      </div>
    </section>
  </div>
  <FooterApp />
</template>
