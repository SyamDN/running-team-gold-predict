<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import HeroHero from '../components/HeroHero.vue'
import Card from '../components/Card.vue'
import CardProduct from '../components/CardProduct.vue'
import Footer from '../components/Footer.vue'
import GoldPriceChart from '@/components/GoldPriceChart.vue'

const articles = ref([])
const produkSection = ref(null)
const artikelSection = ref(null) // Reference to Artikel section

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

const scrollToArtikel = () => {
  artikelSection.value?.scrollIntoView({ behavior: 'smooth' })
}

console.log(articles)
onMounted(() => {
  getArticles()
})
</script>

<template>
  <div class="bg-gradient-to-b from-[#E6FAF9] to-white">
    <Navbar @scrollToProduk="scrollToProduk" @scrollToArtikel="scrollToArtikel" />
    <HeroHero/>
    <section ref="produkSection" class="bg-transparent text-white py-12 px-6 mb-8">
      <div class="max-w-4xl mx-auto text-center text-black">
        <h2 class="text-xl md:text-4xl font-bold">Cara Terbaik Berinvestasi Emas di BSI</h2>
        <p class="mt-4 text-gray-700 text-base max-w-5xl mx-auto leading-relaxed md:text-lg">
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
  </div>

  <div class="bg-gradient-to-b from-[#E6FAF9] to-white">
    <section ref="artikelSection" class="text-white py-12 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-xl md:text-4xl font-bold text-black">
          Tetap Terdepan dengan Berita dan Tren Terbaru Seputar Emas
        </h2>
        <p class="mt-4 text-gray-700 text-base max-w-5xl mx-auto leading-relaxed md:text-lg">
          Dapatkan informasi terkini tentang harga emas, peluang investasi, dan tren pasar. Jadilah
          yang pertama tahu dan rencanakan investasi emas Anda dengan lebih cerdas.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <Card v-for="article in articles" :key="article.id" :article="article" />
        </div>
      </div>
    </section>
  </div>

  <Footer />
</template>
