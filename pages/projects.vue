<template>
  <NuxtLayout name="default">
    <div>
     <div id="projects"></div>
      <ProjectSection :projects="projects" />
     
    </div>
  </NuxtLayout>
</template>
<script setup>


//const
const { projects } = useConstants();
</script>
