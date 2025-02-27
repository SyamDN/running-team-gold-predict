import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import ArtikelEmas from "@/views/ArtikelEmas.vue";
import SimulasiPrediksi from "@/views/SimulasiPrediksi.vue";

const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/artikel/:id',
        component: ArtikelEmas
    },
    {
        path: '/simulasi', component: SimulasiPrediksi
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
