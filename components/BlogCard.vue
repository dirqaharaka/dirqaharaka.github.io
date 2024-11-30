<template>
    <article class="group border dark:border-gray-800 m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300 max-w-4xl mx-auto">
      <NuxtLink :to="`/blogs/${blog.slug}`" class="flex">
        <!-- Gambar di sebelah kiri -->
        <NuxtImg
          class="w-1/3 h-auto object-cover object-center rounded-l-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
          :src="blog.image"
          :alt="blog.alt"
          width="300"
        />
        <!-- Konten di sebelah kanan -->
        <div class="px-3 pb-4 flex-1">
          <h1 class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400 py-3">
            {{ blog.title }}
          </h1>
          <p class="text-ellipsis line-clamp-2 text-base">
            {{ blog.description }}
          </p>
          <div class="text-black dark:text-zinc-300 pt-3 pb-2">
            <!-- Flex container untuk tanggal dan tag -->
            <div class="flex items-center gap-x-4">
              <!-- Tanggal -->
              <div class="flex items-center">
                <LogoDate />
                {{ blog.date }}
              </div>
              <!-- Tag di sebelah tanggal -->
              <div class="flex items-center gap-1 flex-wrap">
                <LogoTag />
                <template v-for="tag in blog.tags" :key="tag">
                  <span class="bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold">{{ tag }}</span>
                </template>
              </div>
            </div>
          </div>
          <div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center py-2">
            <p>Read More</p>
            <LogoArrow />
          </div>
        </div>
      </NuxtLink>
    </article>
  </template>
  
  <script setup>
  defineProps({
    blog: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  /* Custom styles can go here */
  </style>
  