<template>
  <NuxtLayout name="default">
    <div>
      <div id="blogs"></div>
      <BlogSection :blogs="blogs" />
    </div>
  </NuxtLayout>
</template>
<script setup>

//const
const { blogs } = useConstants();
</script>
