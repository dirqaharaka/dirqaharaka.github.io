

<script setup lang="ts">
// import { useRoute } from 'vue-router';
import  type { BlogPost } from '@/types/blog';


const {path} = useRoute();


// Use useAsyncData to fetch content
const { data: articles,  error } = await useAsyncData('blogs', () => 
  queryContent(path)
    .findOne()
);

if (error.value) navigateTo('/404')

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
  }
})


  // console.log(route.params)
</script>


<template>
  <NuxtLayout name="default">

  <div class=" container  mx-auto ">
    <div class="col-span-12 lg:col-span-9">
      <BlogHeader
        :title="data.title"
        :image="data.image"
        :alt="data.alt"
        :date="data.date"
        :description="data.description"
        :tags="data.tags"
      />
      
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"
      >
        <ContentRenderer v-if="articles" :value="articles">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer> 
      </div>
      <BlogToc />
    </div>

    
    </div>
    

  </NuxtLayout>

    
</template>
