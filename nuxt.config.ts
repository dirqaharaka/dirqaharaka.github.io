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
          name: "google-adsense-account",
          content:"ca-pub-7920376998728565"
        },
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
      ],
    },
  },
  modules:
  ["@nuxtjs/tailwindcss",
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-7920376998728565' 
    }]
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
});
