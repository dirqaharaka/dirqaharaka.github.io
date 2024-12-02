<template>
  <div class="container mx-auto p-4">
    <NuxtLink to="/blogs" class="text-blue-500 hover:underline mb-4 inline-block">
      ← Back to Blogs
    </NuxtLink>
    <div v-if="blog" class="prose max-w-none">
      <h1 class="text-3xl font-bold">{{ blog.title }}</h1>
      <p class="text-gray-400 text-sm mb-4">{{ blog.date }}</p>
      <img :src="blog.image" :alt="blog.alt" class="rounded-md mb-4" />
      <ContentRenderer :value="blog.body" />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

// Gunakan queryContent untuk mendapatkan konten berdasarkan slug
const { data: blog } = await queryContent('blogs')
  .where({ slug: route.params.slug })
  .findOne();
</script>
