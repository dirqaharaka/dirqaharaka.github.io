<template>
  <NuxtLayout name="default">
    <div>
      <Modal
        :is-open="isOpen"
        :close-modal="closeModal"
        :modal-content="currentModalContent"
      />
      <Header />
      <TextLeftImgRight />
      <Skills :skill-set="skillWithLogo" />
      <TimelineSection :timeline="timeline" />
      <WorkSection
        :working-projects="workingProjects"
        :on-click-function="showModal"
      />
      <div id="projects"></div>
      <ProjectSection :projects="projects" />
      <HobbySection :hobbies="hobbies" />
      <div class="bg-white dark:bg-[#121212]">
        <Contact id="contact" />
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Web developer portfolio",
  author: {
    "@type": "Person",
    "@id": "#poyizhi",
  },
  url: "https://www.dirqaharaka.com/",
  description:
    "Personal Portfolio Website. I'm a Web Developer based in Indonesia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
  keywords:
    "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer",
  image: "https://www.dirqaharaka.com/profile-pics/profile.webp",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#dirqaharaka",
  name: "Dirqa Haraka",
  email: "dirqaharaka@gmail.com",
  url: "https://www.dirqaharaka.com/",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
definePageMeta({
  layout: false,
});

//const
const { hobbies, skillWithLogo, projects, workingProjects, timeline } =
  useConstants();

// modal functionality
const isOpen = ref(false);
const currentModalContent = ref({});
const showModal = (content) => {
  // lock page height?
  // fill up modals with details
  // open modal
  currentModalContent.value = content;
  isOpen.value = true;
  document.body.style.height = "100vh";
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  isOpen.value = false;
  document.body.style.height = "auto";
  document.body.style.overflow = "visible";
};

onMounted(() => {
  document.addEventListener("keyup", function (event) {
    if (isOpen.value && event.key === "Escape") {
      closeModal();
    }
  });
});
</script>
