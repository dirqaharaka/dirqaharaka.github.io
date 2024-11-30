<template>
    <div class="container mx-auto p-4">
      <NuxtLink to="/blog" class="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Blogs
      </NuxtLink>
      <div class="prose max-w-none">
        <h1 class="text-3xl font-bold">{{ blog.title }}</h1>
        <p class="text-gray-400 text-sm mb-4">{{ blog.date }}</p>
        <img :src="blog.image" :alt="blog.alt" class="rounded-md mb-4" />
        <div v-html="blog.body" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useContent } from '@nuxt/content';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const { data: blog } = await useContent('blogs')
    .where({ slug: route.params.slug })
    .fetchOne();
  </script>
  