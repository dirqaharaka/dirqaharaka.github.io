<template>
    <div class="blog-list">
      <BlogCard v-for="blog in blogs" :key="blog.slug" :blog="blog" />
    </div>
  </template>
  
  <script setup>
  import { useAsyncData } from '#app';
  import BlogCard from '~/components/BlogCard.vue';
  
  const { data: blogs } = await useAsyncData('blogs', () => 
    queryContent('blogs')
      .where({ published: true }) // Hanya tampilkan blog yang dipublikasikan
      .sort({ date: -1 }) // Urutkan berdasarkan tanggal terbaru
      .find()
  );
  </script>
  
  <style scoped>
  .blog-list {
    display: flex; /* Flexbox */
    flex-direction: column; /* Arahkan item secara vertikal */
    gap: 16px; /* Jarak antar blog */
  }
  </style>
  