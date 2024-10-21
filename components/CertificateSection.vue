<template>
  <section id="certificate">
    <h2 class="certificateTitle">Certifications and Achievements </h2>
    <div class="certificate-grid">
      <CardsCertificate
        v-for="item in certificate"
        :key="item"
        :classBg="item.classBg"
         class="relative"
      />
      
    </div>
  </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  certificate: {
    type: Array,
    default: () => [],
  },
});
onMounted(() => {
  let titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".certificateTitle",
      start: "-40px center",
      end: "top center",
      // markers: true,
    },
  });
  titleTl
    .addLabel("start")
    .from(".certificateTitle", { opacity: 0, translateX: "-100px" })
    .addLabel("entering")
    .to(".certificateTitle", { opacity: 1, translateX: "0px", duration: 0.5 })
    .addLabel("end");

  gsap.set(".certicate-card-container", { opacity: 0, y: 20 });
  ScrollTrigger.batch(".certificate-card-container", {
    start: "-70px center",
    end: "top center",
    // markers: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, autoAlpha: 1, stagger: 0.15 }),
  });
});
</script>
