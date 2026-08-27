<script setup lang="ts">
import type { BlogPost } from '@/types/blog';

const { path } = useRoute();

const { data: articles, error } = await useAsyncData('blog-post', () =>
  queryContent(path).findOne()
);

if (error.value) navigateTo('/404');

const data = computed<BlogPost>(() => {
  return {
    title: articles.value?.title || 'no-title available',
    description: articles.value?.description || 'no-description available',
    image: articles.value?.image || '/not-found.jpg',
    alt: articles.value?.alt || 'no alter data available',
    ogImage: articles.value?.ogImage || '/not-found.jpg',
    date: articles.value?.date || 'not-date-available',
    tags: articles.value?.tags || [],
    published: articles.value?.published || false,
  };
});

const tocLinks = computed(() => articles.value?.body?.toc?.links || []);
</script>

<template>
  <NuxtLayout name="default">
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-5xl mx-auto">
        <BlogHeader
          :title="data.title"
          :image="data.image"
          :alt="data.alt"
          :date="data.date"
          :description="data.description"
          :tags="data.tags"
        />

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div class="lg:col-span-9">
            <div
              class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-none mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
            >
              <ContentRenderer v-if="articles" :value="articles">
                <template #empty>
                  <p>No content found.</p>
                </template>
              </ContentRenderer>
            </div>
          </div>

          <div class="lg:col-span-3">
            <BlogToc :links="tocLinks" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
