<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <footer class="bg-transparent text-black py-4 border-t border-gray-300 mt-1 text-sm">
    <div class="container mx-auto flex justify-between items-center px-24">
      <p>&copy; 2025 IT Dev RunningTeam. All rights reserved.</p>
      <button @click="openModal" class="text-gray-500 underline hover:text-green-900">
        Terms & Policies
      </button>
    </div>
  </footer>

  <div
    v-if="isOpen"
    class="bg-black/25 fixed inset-0 flex items-center justify-center z-50"
    style="scrollbar-width: thin; scrollbar-color: #e4ad60 #f5f5f5"
  >
    <!-- Perbaikan: Menambahkan overflow-hidden pada wrapper modal -->
    <div
      class="bg-white rounded-lg shadow-lg w-5/6 md:w-3/4 lg:w-10 xl:w-2/3 p-8 max-h-[90vh] overflow-hidden flex flex-col"
    >
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold">Syarat dan Ketentuan Website Gold Vision</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl">
          &times;
        </button>
      </div>
      <!-- Perbaikan: Konten scrollable terpisah dari container utama -->
      <div class="mt-4 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
        <p>
          Dengan mengakses atau menggunakan layanan kami, maka pengguna dianggap telah membaca,
          mengerti, memahami dan menyetujui semua isi dalam Syarat dan Ketentuan Website Gold Vision
          termasuk perubahannya di kemudian hari. Syarat dan Ketentuan Website Gold Vision ini
          adalah bentuk kesepakatan Anda dan merupakan sebuah perjanjian yang sah dan mengikat
          antara Anda sebagai konsumen dan Gold Vision.
        </p>
        <h3 class="font-bold mt-4">Syarat dan Ketentuan Umum</h3>

        <ol class="list-lower-alpha list-decimal pl-6 space-y-2">
          <li>
            <strong>Penggunaan Situs Web</strong>
            <ul class="list-disc pl-5">
              <li>
                Situs web menyediakan layanan analisis prediktif dan informasi tentang tren harga
                emas untuk tujuan informasi dan edukasi saja.
              </li>
              <li>
                Anda setuju untuk tidak menyalahgunakan situs web, termasuk mencoba meretas,
                mengganggu, atau merusak layanan dengan cara apa pun.
              </li>
            </ul>
          </li>
          <li>
            <strong>Penafian Nasihat Keuangan</strong>
            <ul class="list-disc pl-5">
              <li>
                Informasi yang diberikan di situs web ini bukan merupakan nasihat keuangan,
                investasi, atau perdagangan.
              </li>
              <li>
                Kami tidak menjamin keakuratan, kelengkapan, dan keandalan prediksi harga emas.
              </li>
              <li>
                Pengguna harus melakukan penelitian sendiri dan berkonsultasi dengan penasihat
                keuangan profesional sebelum mengambil keputusan investasi.
              </li>
            </ul>
          </li>
          <li>
            <strong>Akurasi Informasi</strong>
            <ul class="list-disc pl-5">
              <li>
                Meskipun kami berusaha memberikan informasi yang akurat dan terkini, kami tidak
                menjamin bahwa prediksi dan analisis bebas dari kesalahan atau ketidakakuratan.
              </li>
              <li>
                Prediksi harga emas didasarkan pada data historis, algoritma, dan tren pasar yang
                dapat berubah sewaktu-waktu.
              </li>
            </ul>
          </li>
          <li>
            <strong>Batasan Tanggung Jawab</strong>
            <ul class="list-disc pl-5">
              <li>
                Kami tidak bertanggung jawab atas segala kerugian langsung, tidak langsung,
                insidental, atau konsekuensial yang timbul akibat penggunaan situs web kami atau
                ketergantungan pada informasi yang diberikan.
              </li>
              <li>
                Pengguna bertanggung jawab penuh atas keputusan investasi yang diambil berdasarkan
                prediksi atau data yang tersedia di platform kami.
              </li>
              <li>
                Website ini merupakan bagian dari proyek inisiasi dan belum terintegrasi dengan
                produk atau layanan resmi Bank Syariah Indonesia (BSI). Oleh karena itu, BSI tidak
                bertanggung jawab atas segala informasi atau aktivitas yang terjadi di dalam website
                ini.
              </li>
            </ul>
          </li>
          <li>
            <strong>Hak Kekayaan Intelektual</strong>
            <ul class="list-disc pl-5">
              <li>
                Semua konten, termasuk teks, grafis, bagan, dan algoritma adalah hak kekayaan
                intelektual situs web dan tidak boleh disalin, didistribusikan, atau digunakan tanpa
                izin.
              </li>
            </ul>
          </li>
          <li>
            <strong>Tautan Pihak Ketiga</strong>
            <ul class="list-disc pl-5">
              <li>
                Situs web kami dapat berisi tautan ke situs web pihak ketiga. Kami tidak bertanggung
                jawab atas konten, keakuratan, atau praktik dari situs eksternal tersebut.
              </li>
              <li>
                Mengakses tautan pihak ketiga merupakan risiko pengguna sendiri dan kami menyarankan
                Anda untuk meninjau syarat dan kebijakan mereka.
              </li>
            </ul>
          </li>
          <li>
            <strong>Perubahan Syarat dan Ketentuan</strong>
            <ul class="list-disc pl-5">
              <li>
                Kami berhak untuk mengubah Syarat dan Ketentuan ini kapan saja tanpa pemberitahuan
                sebelumnya.
              </li>
              <li>
                Penggunaan situs web setelah perubahan diposting berarti Anda menerima syarat yang
                diperbarui.
              </li>
            </ul>
          </li>
          <li>
            <strong>Kebijakan Privasi</strong>
            <ul class="list-disc pl-5">
              <li>Situs web ini tidak mengumpulkan atau menyimpan data pribadi pengguna.</li>
              <li>
                Kami menghormati privasi pengguna dan tidak akan meminta informasi pribadi dalam
                bentuk apapun.
              </li>
            </ul>
          </li>
          <li>
            <strong>Hukum yang Berlaku</strong>
            <ul class="list-disc pl-5">
              <li>
                Syarat dan ketentuan ini diatur dan ditafsirkan sesuai dengan hukum regulasi yang
                berlaku.
              </li>
              <li>
                Setiap perselisihan yang timbul dari penggunaan situs web ini akan diselesaikan
                melalui proses hukum regulasi yang berlaku.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #e4ad60 #f5f5f5;
}

/* Untuk browser berbasis Webkit */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f5f5f5;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #e4ad60;
  border-radius: 10px;
}
</style>
