<template>
  <NuxtLayout name="default">
    <div>
      <div id="blogs"></div>
      <Hero />
      <!-- Pass data blogs to BlogList -->
      <BlogList :blogs="blogs" />
    </div>
  </NuxtLayout>
</template>

<script setup>
  import { ref, onMounted } from 'vue'; // Import ref dan onMounted
  import BlogList from '~/components/BlogList.vue'; // Impor BlogList
  import Hero from '~/components/hero.vue'; // Impor Hero
  
  const blogs = ref([]); // Membuat reaktif data untuk daftar blog

  // Ambil data blog menggunakan queryContent saat komponen mounted
  onMounted(async () => {
    const { data } = await queryContent('blogs').find(); // Query untuk mengambil semua blog
    blogs.value = data; // Simpan hasil query ke dalam ref
  });
</script>
