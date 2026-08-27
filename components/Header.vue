<template>
  <header class="headerHeight">
    <div>
      <!-- previously set width 1600 height 1200 -->
      <img
        src="/setuphd.webp"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 80vw, (max-width: 1439px) 100vw"
        srcset="
          /setuphd-min.webp  768w,
          /setuphd.webp     1024w
        "
        alt="laptop with black background"
      />
    </div>
    <div class="header-content">
      <h1>
        <MyTransition>
          <span v-if="!loading" class="flex justify-center items-center text-white text-3xl font-bold pt-12">
            Hi there
            <span>
              <IconsHiIcon class="ml-3 p-1" />
            </span>
          </span>
        </MyTransition>
        <MyTransition :delay="Number(1.5)">
          <span v-if="!loading" class="mt-2 tracking-wide text-white">
            My name is Dirqa
          </span>
        </MyTransition>
        <MyTransition :delay="Number(2.0)">
          <span v-if="!loading" class="mt-12 tracking-wide text-white">
          I'm a Cyber Security Enthusiast
          </span>
        </MyTransition>
        <!-- <MyTransition :delay="Number(1.5)">
          <span v-if="!loading" class="py-2 tracking-wide text-white">
            and Cyber Security Enthusiast
          </span>
        </MyTransition> -->
      </h1>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted } from "vue";
let loading = ref(true);
onMounted(() => {
  loading.value = false;
});
</script>
<style lang="scss" scoped>
.headerHeight {
  height: calc(100vh - 30px);
}

.header-content {
  padding-top: clamp(12rem, 45vh, 26rem);
}
</style>
