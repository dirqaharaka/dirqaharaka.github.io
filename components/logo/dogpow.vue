<template>
  <figure class="setup-frame">
    <div class="setup-image-wrap">
      <img
        :src="setupImage"
        alt="My personal desk setup"
        class="setup-image"
        width="1280"
        height="720"
        fetchpriority="high"
      />
    </div>
    <figcaption>My setup</figcaption>
  </figure>
</template>

<script setup>
import setupImage from "./mysetup.jpg";
</script>

<style scoped>
.setup-frame {
  width: min(100%, 27rem);
  margin: 0 auto;
  padding: 0.75rem;
  background: #ffffff;
  border: 1px solid rgb(15 23 42 / 0.1);
  border-radius: 1.25rem;
  box-shadow: 0 1.5rem 3rem rgb(15 23 42 / 0.14);
  transform: rotate(2deg);
  transition:
    transform 220ms ease,
    box-shadow 220ms ease;
}

.setup-frame:hover {
  box-shadow: 0 1.75rem 3.5rem rgb(15 23 42 / 0.2);
  transform: rotate(0deg) translateY(-0.25rem);
}

.setup-image-wrap {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 0.75rem;
  background: #e2e8f0;
}

.setup-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

figcaption {
  padding: 0.6rem 0.25rem 0.1rem;
  color: #475569;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
}

@media (prefers-reduced-motion: reduce) {
  .setup-frame {
    transition: none;
  }
}
</style>
