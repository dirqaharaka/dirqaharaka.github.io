
<template>
  <div class="mx-auto mb-5 max-w-4xl ">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6">
        <h1
          class="text-black dark:text-zinc-300 font-semibold leading-tight text-4xl md:text-5xl my-5"
        >
          {{ hero[0].title }}
          
        </h1>
        <p class="dark:text-zinc-300">
          {{ hero[0].description }}
        </p>
      </div>
      <div class="px-6 justify-self-center">
        <LogoDogpow />
      </div>
    </div>
  </div>
</template>

<script setup>


//const
const { hero } = useConstants();
console.log(hero)

</script>