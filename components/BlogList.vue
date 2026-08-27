<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <BlogFilters
      :tags="allTags"
      :selected-tags="selectedTags"
      :selected-date="selectedDate"
      @update:selected-tags="onTagsChange"
      @update:selected-date="onDateChange"
    />

    <!-- Blog cards -->
    <div v-if="paginatedBlogs.length" class="grid grid-cols-1 gap-6 mt-6">
      <BlogCard v-for="blog in paginatedBlogs" :key="blog._path" :blog="blog" />
    </div>
    <div v-else class="text-center py-12">
      <p class="text-gray-500 dark:text-zinc-400 text-lg">No blog posts found.</p>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-10">
      <button
        class="px-3 py-1.5 text-sm rounded-lg border transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        :class="currentPage === 1
          ? 'bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-zinc-600 border-gray-200 dark:border-gray-800'
          : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-zinc-400 border-gray-300 dark:border-gray-700 hover:border-sky-500 dark:hover:border-sky-400'"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        Prev
      </button>

      <template v-for="page in visiblePages" :key="page">
        <span
          v-if="page === '...'"
          class="px-2 py-1.5 text-sm text-gray-400 dark:text-zinc-600"
        >...</span>
        <button
          v-else
          class="w-9 h-9 text-sm rounded-lg border transition-colors duration-200"
          :class="currentPage === page
            ? 'bg-sky-600 text-white border-sky-600'
            : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-zinc-400 border-gray-300 dark:border-gray-700 hover:border-sky-500 dark:hover:border-sky-400'"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
      </template>

      <button
        class="px-3 py-1.5 text-sm rounded-lg border transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        :class="currentPage === totalPages
          ? 'bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-zinc-600 border-gray-200 dark:border-gray-800'
          : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-zinc-400 border-gray-300 dark:border-gray-700 hover:border-sky-500 dark:hover:border-sky-400'"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        Next
      </button>
    </div>

    <!-- Page info -->
    <p v-if="filteredBlogs.length" class="text-center text-sm text-gray-400 dark:text-zinc-600 mt-4">
      Showing {{ (currentPage - 1) * perPage + 1 }}–{{ Math.min(currentPage * perPage, filteredBlogs.length) }} of {{ filteredBlogs.length }} posts
    </p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  blogs: {
    type: Array,
    default: () => [],
  },
});

const perPage = 10;
const currentPage = ref(1);
const selectedTags = ref([]);
const selectedDate = ref('all');

// Extract unique tags from all blogs
const allTags = computed(() => {
  const tagSet = new Set();
  props.blogs.forEach((blog) => {
    if (blog.tags) {
      blog.tags.forEach((tag) => tagSet.add(tag));
    }
  });
  return Array.from(tagSet).sort();
});

// Parse date string like "1st Mar 2023" to timestamp
const parseDate = (dateStr) => {
  if (!dateStr) return 0;
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/gi, '$1').trim();
  return new Date(cleaned).getTime() || 0;
};

// Filter blogs: ALL selected tags must be present (AND logic)
const filteredBlogs = computed(() => {
  let result = [...props.blogs];

  // Filter by tags (AND)
  if (selectedTags.value.length > 0) {
    result = result.filter((blog) =>
      blog.tags && selectedTags.value.every((tag) => blog.tags.includes(tag))
    );
  }

  // Filter by date range
  if (selectedDate.value !== 'all') {
    const days = parseInt(selectedDate.value, 10);
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
    result = result.filter((blog) => parseDate(blog.date) >= cutoff);
  }

  return result;
});

// Reset to page 1 when filters change
watch([selectedTags, selectedDate], () => {
  currentPage.value = 1;
});

const totalPages = computed(() => Math.max(1, Math.ceil(filteredBlogs.value.length / perPage)));

const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return filteredBlogs.value.slice(start, start + perPage);
});

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const pages = [];

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  pages.push(1);
  if (current > 3) pages.push('...');
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push('...');
  pages.push(total);
  return pages;
});

const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  const el = document.getElementById('blogs');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const onTagsChange = (tags) => {
  selectedTags.value = tags;
};

const onDateChange = (date) => {
  selectedDate.value = date;
};
</script>
