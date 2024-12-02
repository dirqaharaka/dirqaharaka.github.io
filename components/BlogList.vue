<template>
  <div class="blog-list">
    <BlogCard v-for="blog in blogs" :key="blog.slug" :blog="blog" />
  </div>
</template>

<script setup>
import BlogCard from '~/components/BlogCard.vue';
import { useAsyncData } from '#app'; // Import useAsyncData

// Use useAsyncData to fetch content
const { data: blogs } = await useAsyncData('blogs', () => 
  queryContent('blogs')
    .where({ published: true })
    .sort({ date: -1 })
    .find()
);
</script>

<style scoped>
.blog-list {
  display: flex;
  flex-direction: column; /* Arrange items vertically */
  gap: 16px; /* Space between items */
}
</style>
