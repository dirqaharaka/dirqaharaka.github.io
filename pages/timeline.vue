<template>
  <NuxtLayout name="default">
    <div>
      <TimelineSection :timeline="timeline" />
    </div>
  </NuxtLayout>
</template>
<script setup>


//const
const { timeline } = useConstants();
</script>
