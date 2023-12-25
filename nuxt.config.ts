import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-portfolio/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Dirqa Haraka Putra Nursadih",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Personal Portfolio Website. I'm a Front-End Web Developer based in Kuala Lumpur, Malaysia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Dirqa Haraka" },
        {
          name: "keywords",
          content:
            "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Dirqa Haraka,  Dirqa, cyber, drxiiiq, Indonesia",
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "Dirqa Haraka",
        },
        {
          property: "og:site",
          content: "https://www.dirqaharaka.com/",
        },
        {
          property: "og:title",
          content: "Dirqa Haraka Putra Nursadih",
        },
        {
          property: "og:description",
          content:
            "Personal Portfolio Website. I'm a Web Developer based in Makassar, Indonesia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
        },
        // sharing thumbmail img
        {
          property: "og:image",
          content: "/drxiiiq-bw.png", ///favicon-wb.png
        },
        // google site verification
        {
          name: "google-site-verification",
          content: "CpKqeACrIS7JLwdilAnMgoDicJnoBaNmupPoq6fUtFs",
        },
      ],
      link: [{ rel: "icon", href: "/logo-drxiiiq.png" }],
      script: [
        {
          async: "",
          src: "https://www.googletagmanager.com/gtag/js?id=G-98SHRX2R23",
        },
        {
          type: "text/javascript",
          src: "js/useGtag.js",
          body: true,
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
});
