<template>
  <section
    id="about"
    class="flex items-center bg-white pt-24 md:py-20 lg:py-0 dark:bg-[#121212]"
  >
    <div class="px-6 mx-auto md:w-10/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
      <div class="items-center justify-between lg:flex lg:space-x-10">
        <div class="lg:w-7/12 leftText">
          <h2 class="profile-title">Who am I?</h2>
          <div class="profile-description-container">
            <p>
              Hi there! I'm a self-taught web developer.
              My passion is in Cyber Security but i like coding for web development.
              Currently i am working as a
              Junior Developer in
              <a
                class="font-bold text-red-600 dark:text-red-300 hover:underline"
                href="https://kumalagroup.co.id/"
                >Kumala Group</a
              >.
              Right now i am looking for opportunity in Cyber Security field, especially on Penetration Tester.
            </p>
<!-- 
            <p>
              I'm passionate in learning new technologies, building responsive
              websites, and documenting my working process when it comes to
              complicated features.
            </p> -->

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <div class="summary-skill-list-container">
            <ul>
              <li>Codeigniter</li>
              <li>Express</li>
              <li>TailwindCSS</li>
            </ul>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Vue</li>
            </ul>
          </div>

          <div class="profile-social-icons">
            <a
              href="https://www.instagram.com/drx1q/"
              aria-label="Instagram"
              target="blank"
            >
              <IconsInstaIcon />
            </a>

            <!-- <a
              href="https://www.facebook.com/drxiiiq"
              aria-label="Facebook"
              target="blank"
            >
              <IconsFacebookIcon />
            </a> -->

            <a
              href="https://www.linkedin.com/in/dirqaharaka/"
              aria-label="Linkden"
              target="blank"
            >
              <IconsLinkedInIcon />
            </a>

            <a
              href="https://github.com/dirqaharaka"
              aria-label="Github"
              target="blank"
            >
              <IconsGithubIcon />
            </a>
          </div>
        </div>

        <div class="mt-8 lg:mt-0 lg:w-4/12 xl:w-4/12">
          <div class="flex items-center justify-center lg:justify-end group">
            <div class="profile-img-container">
              <img
                src="/profile-pics/fotodirqa.jpg"
                width="350"
                height="350"
                alt="profile image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".leftText",
      start: "top center",
      end: "top center",
      // markers: true,
      // toggleActions: "restart pause reverse pause",
      // scrub: 1, // scrub is use set the amount of time to catch up, it kinda looks the scroll animation with ur scroller
    },
  });
  tl.addLabel("start")
    .from(".leftText", { opacity: 0, translateX: "-100px" })
    .addLabel("entering")
    .to(".leftText", { opacity: 1, translateX: "0px", duration: 1 })
    .addLabel("end");

  let imgTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".profile-img-container",
      start: "top center",
      end: "top center",
      // markers: true,
    },
  });
  imgTl
    .addLabel("start")
    .from(".profile-img-container", { opacity: 0 })
    .addLabel("entering")
    .to(".profile-img-container", { opacity: 1, duration: 0.3 })
    .addLabel("end");
});
</script>
<style scoped>
@media screen and (min-width: 1024px) {
  section {
    height: 100vh;
  }
}
</style>
