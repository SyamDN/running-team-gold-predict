import { createRouter, createWebHistory } from "vue-router";
import ArtikelEmas from "@/views/ArtikelEmas.vue";
import SimulasiPrediksi from "@/views/SimulasiPrediksi.vue";
import HomePage from "../views/HomePage.vue";

const routes = [
    {
        path: '/', component: HomePage
    },
    {
        path: '/artikel', component: ArtikelEmas
    },
    {
        path: '/simulasi', component: SimulasiPrediksi
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
