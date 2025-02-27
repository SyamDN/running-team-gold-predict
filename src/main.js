// Mengimpor file CSS utama untuk styling aplikasi
import './assets/main.css'

// Mengimpor fungsi createApp dari Vue untuk membuat instance aplikasi
import { createApp } from 'vue'
// Mengimpor komponen root App dari file App.vue
import App from './App.vue'
// Mengimpor konfigurasi router untuk navigasi aplikasi dari file router
import router from './router'

// Membuat instance aplikasi Vue menggunakan komponen root App
const app = createApp(App)

// Mengintegrasikan router ke dalam instance aplikasi untuk mendukung navigasi antar halaman
app.use(router)

// Mem-mount aplikasi ke elemen DOM dengan id 'app' sehingga aplikasi dapat berjalan pada halaman HTML
app.mount('#app')
