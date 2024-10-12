<template>
  <NuxtLayout name="default">
    <div>
      <Modal
        :is-open="isOpen"
        :close-modal="closeModal"
        :modal-content="currentModalContent"
      />
      <WorkSection
        :working-projects="workingProjects"
        :on-click-function="showModal"
      />
     
    </div>
  </NuxtLayout>
</template>
<script setup>

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


//const
const { workingProjects } = useConstants();
</script>
