<template>
  <article class="group border dark:border-gray-800 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300 hover:shadow-md transition-shadow duration-300">
    <NuxtLink :to="`${blog._path}`" class="flex flex-col sm:flex-row">
      <!-- Gambar -->
      <img
        class="w-full sm:w-1/3 h-48 sm:h-56 object-cover object-center sm:rounded-l-2xl sm:rounded-tr-none rounded-t-2xl group-hover:scale-[1.02] transition-all duration-500"
        :src="blog.image"
        :alt="blog.alt"
        loading="lazy"
      />
      <!-- Konten -->
      <div class="px-4 pb-4 pt-3 flex-1 flex flex-col justify-between">
        <div>
          <h1 class="text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400">
            {{ blog.title }}
          </h1>
          <p class="text-ellipsis line-clamp-2 text-base mt-1">
            {{ blog.description }}
          </p>
        </div>
        <div>
          <div class="text-black dark:text-zinc-300 pt-3 pb-2">
            <div class="flex items-center gap-x-4 flex-wrap">
              <div class="flex items-center">
                <LogoDate />
                {{ blog.date }}
              </div>
              <div class="flex items-center gap-1 flex-wrap">
                <LogoTag />
                <template v-for="tag in blog.tags" :key="tag">
                  <span class="bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 text-sm font-semibold">{{ tag }}</span>
                </template>
              </div>
            </div>
          </div>
          <div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center py-2">
            <p>Read More</p>
            <LogoArrow />
          </div>
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
