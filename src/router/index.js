import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import ArtikelEmas from "@/views/ArtikelEmas.vue";
import Simulasi from "@/views/Simulasi.vue";

const routes = [
    {
        path: '/', component: Home
    },

    {
        path: '/artikel', component: ArtikelEmas
    },
    {
        path: '/simulasi', component: Simulasi
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;