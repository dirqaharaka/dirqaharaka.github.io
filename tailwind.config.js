module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        tea: "url('/hobbies/tea-cup.webp')",
        icecream: "url('/hobbies/ice-cream.jpg')",
        gaming : "url('/hobbies/gaming.jpg')",
        hacking : "url('/hobbies/hacking.jpg')",
        blog: "url('/hobbies/myblog.webp')",
        music: "url('/hobbies/negative-space-headphones-black-white-corey-blaz.webp')",
        grocer: "url('/hobbies/grocer.webp')",
        journaling: "url('/hobbies/journaling.webp')",
        programming: "url('/hobbies/programming.webp')",
        tryhackme1: "url('/certificate/THM-comptia.jpeg')",
        tryhackme2: "url('/certificate/THM-presecurity.png')",
        tryhackme3: "url('/certificate/THM-introsecurity.png')",
        tryhackme4: "url('/certificate/THM-presecurity.png')",
        arcx: "url('/certificate/arcx.jpeg')",
        certiprof: "url('/certificate/certiprof.png')",
        dicoding1: "url('/certificate/dicoding-sql.jpg')",
        dicoding2: "url('/certificate/dicoding-js.png')",
        dicoding3: "url('/certificate/dicoding-html.jpg')",
        dicoding4: "url('/certificate/dicoding-dasar-web.png')",
        dicoding5: "url('/certificate/dicoding-dasar-devops.png')",
        dicoding6: "url('/certificate/dicoding-dart.png')",
        sololearn1: "url('/certificate/sololearn-php.jpg')",
        sololearn2: "url('/certificate/sololearn-js.jpg')",
        sololearn3: "url('/certificate/sololearn-py.jpg')",
      },
      minWidth: {
        sm: "20rem",
        md: "28rem",
      },
      minHeight: {
        "project-card": "12rem",
      },
      maxWidth: {
        xxs: "16rem",
      },
      screens: {
        iphone: "414px",
        "3xl": "1680px",
      },
      boxShadow: {
        "btm-right": "8px 12px 24px -12px #666565",
        "top-right": "-12px -8px 24px -12px #666565",
        around: "0px 0px 17px 2px rgba(255, 255, 255, 0.43)",
      },
    },
  },
};
