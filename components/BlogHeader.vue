<script setup lang="ts">
interface Props {
  title: string;
  image: string;
  alt: string;
  description: string;
  date: string;
  tags: Array<string>;
}

withDefaults(defineProps<Props>(), {
  title: 'no-title',
  image: '#',
  alt: 'no-img',
  description: 'no description',
  date: 'no-date',
  tags: () => [],
});
</script>

<template>
    
  <div class="max-w-4xl mx-auto my-8 p-4 space-y-6">
    <!-- Title -->
    <h1 class="text-2xl md:text-4xl font-bold text-center text-gray-800 dark:text-zinc-300">
      {{ title || '' }}
    </h1>

    <!-- Image -->
    <NuxtImg
      :src="image || ''"
      :alt="alt || ''"
      width="600"
      class="block mx-auto rounded-2xl shadow-lg h-48 md:h-72 w-full object-cover"
    />

    <!-- Description -->
    <p class="text-sm md:text-base max-w-2xl mx-auto text-center text-gray-600 dark:text-zinc-400">
      {{ description }}
    </p>

    <!-- Date -->
    <div class="flex items-center justify-center text-gray-700 dark:text-zinc-300 font-semibold">
      <LogoDate class="mr-2" />
      <p>{{ date || '' }}</p>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap justify-center gap-2">
      <LogoTag class="mr-2" />
      <template v-for="tag in tags" :key="tag">
        <span class="bg-gray-200 dark:bg-slate-900 text-gray-700 dark:text-zinc-300 rounded-md px-3 py-1 font-semibold">
          {{ tag }}
        </span>
      </template>
    </div>
   

</div>
<!-- </div> -->

</template>

<style scoped>


</style>


