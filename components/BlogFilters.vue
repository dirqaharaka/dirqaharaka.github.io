<template>
  <div class="max-w-4xl mx-auto px-4 mb-6">
    <!-- Tags filter (multi-select) -->
    <div class="mb-4">
      <h3 class="text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">Filter by Tags</h3>
      <div class="flex flex-wrap gap-2">
        <button
          class="px-3 py-1 text-sm rounded-full border transition-colors duration-200"
          :class="selectedTags.length === 0
            ? 'bg-sky-600 text-white border-sky-600'
            : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-zinc-400 border-gray-300 dark:border-gray-700 hover:border-sky-500 dark:hover:border-sky-400'"
          @click="$emit('update:selectedTags', [])"
        >
          All Tags
        </button>
        <button
          v-for="tag in tags"
          :key="tag"
          class="px-3 py-1 text-sm rounded-full border transition-colors duration-200"
          :class="selectedTags.includes(tag)
            ? 'bg-sky-600 text-white border-sky-600'
            : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-zinc-400 border-gray-300 dark:border-gray-700 hover:border-sky-500 dark:hover:border-sky-400'"
          @click="toggleTag(tag)"
        >
          {{ tag }}
        </button>
      </div>
      <p v-if="selectedTags.length" class="text-xs text-gray-400 dark:text-zinc-600 mt-2">
        Showing posts with ALL selected tags ({{ selectedTags.join(', ') }})
      </p>
    </div>

    <!-- Date filter -->
    <div class="flex items-center gap-3">
      <h3 class="text-sm font-semibold text-gray-700 dark:text-zinc-300">Filter by Date</h3>
      <select
        :value="selectedDate"
        class="px-3 py-1 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
        @change="$emit('update:selectedDate', $event.target.value)"
      >
        <option value="all">All Time</option>
        <option value="7">Last 7 Days</option>
        <option value="30">Last 30 Days</option>
        <option value="90">Last 3 Months</option>
        <option value="365">Last Year</option>
      </select>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
  selectedTags: {
    type: Array,
    default: () => [],
  },
  selectedDate: {
    type: String,
    default: 'all',
  },
});

const emit = defineEmits(['update:selectedTags', 'update:selectedDate']);

const toggleTag = (tag) => {
  const current = [...props.selectedTags];
  const index = current.indexOf(tag);
  if (index > -1) {
    current.splice(index, 1);
  } else {
    current.push(tag);
  }
  emit('update:selectedTags', current);
};
</script>
