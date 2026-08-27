<template>
  <NuxtLayout name="default">
    <div>
      <div id="blogs"></div>
      <Hero />
      <BlogList :blogs="blogs" />
    </div>
  </NuxtLayout>
</template>

<script setup>
const { data: blogs } = await useAsyncData('blogs-list', () =>
  queryContent('blogs')
    .where({ published: true })
    .sort({ date: -1 })
    .find()
);
</script>
