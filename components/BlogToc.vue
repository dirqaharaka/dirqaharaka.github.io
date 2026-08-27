<script setup lang="ts">
import useTocActive from '~/composables/useTocActive';

const props = defineProps({
  links: {
    type: Array,
    default: () => [],
  },
});

const { activeId, init } = useTocActive();

onMounted(() => {
  init();
});

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 100;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
</script>

<template>
  <div v-if="links.length" class="sticky top-28 hidden lg:block">
    <div class="border dark:border-gray-800 p-4 rounded-md min-w-[200px] dark:bg-slate-900">
      <h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2 text-gray-800 dark:text-zinc-300">
        Table Of Content
      </h1>
      <nav>
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="block text-xs mb-3 transition-colors duration-200"
          :class="[
            activeId === link.id
              ? 'text-sky-600 dark:text-sky-400 font-semibold'
              : 'text-gray-600 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400'
          ]"
          @click.prevent="scrollTo(link.id)"
        >
          {{ link.text }}
        </a>
      </nav>
    </div>
  </div>
</template>
