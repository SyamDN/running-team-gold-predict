<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="container">
    <div class="rounded-t-lg">
      <!-- Kartu Artikel -->
      <div class="bg-transparent max-w-sm mx-auto  rounded-t-lg">
        <!-- Gambar -->
        <div class="w-full h-40 sm:h-50 overflow-hidden rounded-t-lg">
          <img :src="article.image" alt="Artikel" class="w-full h-full object-cover" />
        </div>

        <!-- Konten Artikel -->
        <div class="p-4 text-left">
          <h3 class="text-lg font-bold text-white break-words">{{ article.title }}</h3>
          <p class="text-gray-200 mt-2 text-sm sm:text-base whitespace-normal break-words">
            {{
              article.description.length > 100
                ? article.description.slice(0, 100) + '...'
                : article.description
            }}
          </p>

          <!-- Link Info Selengkapnya -->
          <RouterLink
            to="/artikel"
            class="text-yellow-100 font-semibold inline-block mt-10 text-sm hover:underline"
          >
            Info Selengkapnya →
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
