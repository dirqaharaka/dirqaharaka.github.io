<template>
    <NuxtLayout name="default">
      <div>
        <div id="blogs"></div>
        <Hero />
        <BlogList />
      </div>
    </NuxtLayout>
  </template>
  
  <script setup>
    import BlogList from '~/components/BlogList.vue'; // Impor BlogList
    import Hero from '~/components/hero.vue'; // Impor BlogList

  </script>
  