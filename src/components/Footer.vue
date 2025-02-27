<script setup>
import { ref } from 'vue'

// State reaktif untuk mengontrol visibilitas modal
const isOpen = ref(false)

// Fungsi untuk membuka modal
const openModal = () => {
  isOpen.value = true
}

// Fungsi untuk menutup modal
const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <!-- Footer dengan informasi hak cipta dan tombol Terms & Policies -->
  <footer class="bg-transparent text-black py-4 border-t border-gray-300 mt-1 text-sm">
    <div class="container mx-auto flex justify-between items-center px-24">
      <p>&copy; 2025 IT Dev RunningTeam. All rights reserved.</p>
      <button @click="openModal" class="text-gray-500 underline hover:text-green-900">
        Terms & Policies
      </button>
    </div>
  </footer>

  <!-- Modal Syarat & Ketentuan -->
  <div
    v-if="isOpen"
    class="bg-black/25 fixed inset-0 flex items-center justify-center z-50"
    style="scrollbar-width: thin; scrollbar-color: #e4ad60 #f5f5f5"
  >
    <!-- Wrapper modal -->
    <div
      class="bg-white rounded-lg shadow-lg w-5/6 md:w-3/4 lg:w-10 xl:w-2/3 p-8 max-h-[90vh] overflow-hidden flex flex-col"
    >
      <!-- Header modal -->
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold">Syarat dan Ketentuan Website Gold Vision</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl">
          &times;
        </button>
      </div>

      <!-- Konten modal scrollable -->
      <div class="mt-4 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
        <p>
          Dengan mengakses atau menggunakan layanan kami, pengguna dianggap telah membaca, mengerti,
          memahami, dan menyetujui semua isi dalam Syarat dan Ketentuan Website Gold Vision.
        </p>

        <h3 class="font-bold mt-4">Syarat dan Ketentuan Umum</h3>

        <ol class="list-lower-alpha list-decimal pl-6 space-y-2">
          <li>
            <strong>Penggunaan Situs Web</strong>
            <ul class="list-disc pl-5">
              <li>
                Situs web ini menyediakan analisis prediktif harga emas untuk tujuan informasi dan
                edukasi saja.
              </li>
              <li>
                Dilarang melakukan peretasan, gangguan, atau penyalahgunaan layanan di situs web ini.
              </li>
            </ul>
          </li>
          <li>
            <strong>Penafian Nasihat Keuangan</strong>
            <ul class="list-disc pl-5">
              <li>
                Informasi di situs ini bukan merupakan nasihat keuangan, investasi, atau perdagangan.
              </li>
              <li>
                Kami tidak menjamin keakuratan prediksi harga emas dan pengguna bertanggung jawab
                atas keputusan investasi mereka.
              </li>
            </ul>
          </li>
          <li>
            <strong>Batasan Tanggung Jawab</strong>
            <ul class="list-disc pl-5">
              <li>
                Kami tidak bertanggung jawab atas segala kerugian akibat penggunaan informasi di situs ini.
              </li>
              <li>
                Website ini tidak terafiliasi secara resmi dengan Bank Syariah Indonesia (BSI).
              </li>
            </ul>
          </li>
          <li>
            <strong>Hak Kekayaan Intelektual</strong>
            <ul class="list-disc pl-5">
              <li>
                Semua konten dalam situs ini tidak boleh disalin atau digunakan tanpa izin.
              </li>
            </ul>
          </li>
          <li>
            <strong>Perubahan Syarat dan Ketentuan</strong>
            <ul class="list-disc pl-5">
              <li>
                Kami berhak mengubah Syarat dan Ketentuan tanpa pemberitahuan sebelumnya.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style>
/* Custom scrollbar untuk tampilan lebih estetis */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #e4ad60 #f5f5f5;
}

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
mplate>
