<template>
    <div>
      <button 
        v-for="category in categories" 
        :key="category" 
        @click="$emit('filter', category)">
        {{ category }}
      </button>
    </div>
  </template>
  
  <script setup>
  defineProps(['categories']);
  </script>
  