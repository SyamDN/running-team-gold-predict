import { createRouter, createWebHistory } from "vue-router"; 
import Home from '../views/Home.vue'; 
import ArtikelEmas from "@/views/ArtikelEmas.vue"; 
import SimulasiPrediksi from "@/views/SimulasiPrediksi.vue"; 

// Definisi daftar rute dalam aplikasi
const routes = [
    {
        path: '/', // Rute utama (halaman beranda)
        component: Home
    },
    {
        path: '/artikel/:id', // Rute untuk halaman artikel emas dengan parameter ID
        component: ArtikelEmas
    },
    {
        path: '/simulasi', // Rute untuk halaman simulasi prediksi harga emas
        component: SimulasiPrediksi
    },
];

// Membuat instance router dengan mode history
const router = createRouter({
    history: createWebHistory(), // Menggunakan mode history untuk URL yang lebih bersih (tanpa hash "#")
    routes, // Memasukkan daftar rute yang telah didefinisikan
});

export default router; // Mengekspor router agar bisa digunakan dalam aplikasi Vue
