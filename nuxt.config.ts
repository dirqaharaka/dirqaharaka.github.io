import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    // baseURL: '/portfolio/', // baseURL: '/<repository>/'
    // buildAssetsDir: 'assets',
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
            "Personal Portfolio Website. I'm a Front-End Web Developer based in Indonesia. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Dirqa Haraka" },
        {
          name: "keywords",
          content:
            "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Dirqa Haraka,  Dirqa, cyber, drxiiiq, Indonesia",
        },
        {
          name: "google-adsense-account",
          content:"ca-pub-7920376998728565"
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "Dirqa Haraka",
        },
        {
          property: "og:site",
          content: "https://dirqaharaka.github.io/",
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
          content: "",
        },
      ],
      link: [{ rel: "icon", href: "/logo-drxiiiq.png" }],
      script: [
        {
          async: "",
          //google analytic code
          src: "",
        },
        {
          type: "text/javascript",
          src: "js/useGtag.js",
          body: true,
        },
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7920376998728565",
          async: true,
          crossorigin:"anonymous"
        }
      ],
    },
  },
  modules:
      ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  content: {
    dir: 'content', // Lokasi folder content
  },
  

  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
});