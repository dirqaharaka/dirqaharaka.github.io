
export function useConstants() {
  const navigation = [
    {
      id: 1,
      name: "About",
      href: "/#about",
    },
    {
      id: 2,
      name: "Skills",
      href: "/#skills",
    },
    {
      id: 3,
      name: "Timeline",
      href: "/timeline",
    },
    {
      id: 4,
      name: "Works",
      href: "/works",
    },
    {
      id: 5,
      name: "Contacts",
      href: "/contacts",
    },
    {
      id: 6,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 7,
      name: "Blogs",
      href: "/blogs",
    },
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/html5-original.svg",
      name: "HTML",
      alt: "HTML logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/css3-plain-wordmark.svg",
      name: "CSS",
      alt: "CSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/javascript-original.svg",
      name: "JavaScript",
      alt: "JavaScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/vuejs-original.svg",
      name: "Vue",
      alt: "Vue logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nuxtjs-original.svg",
      name: "Nuxt",
      alt: "Nuxt logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/react-original.svg",
      name: "React",
      alt: "React logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nextjs-original.svg",
      name: "Next",
      alt: "Next logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/tailwindcss-plain.svg",
      name: "TailwindCSS",
      alt: "TailwindCSS logo",
      width: 150,
      height: 150,
    },
    // {
    //   imgUrl: "/logos/firebase-plain.svg",
    //   name: "Firebase",
    //   alt: "Firebase logo",
    //   width: 150,
    //   height: 150,
    // },
    // {
    //   imgUrl: "/logos/typescript-original.svg",
    //   name: "TypeScript",
    //   alt: "TypeScript logo",
    //   width: 150,
    //   height: 150,
    // },
    {
      imgUrl: "/logos/nodejs-original.svg",
      name: "NodeJS",
      alt: "NodeJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/git-original.svg",
      name: "Git",
      alt: "Git logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/jquery-original.svg",
      name: "jQuery",
      alt: "jQuery logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/bootstrap-original.svg",
      name: "Bootstrap",
      alt: "Bootstrap logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/php-original.svg",
      name: "PHP",
      alt: "PHP logo",
      width: 321,
      height: 315,
    },
    {
      imgUrl: "/logos/codeigniter-original.svg",
      name: "Codeigniter",
      alt: "Codeigniter logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/laravel-original.svg",
      name: "Laravel",
      alt: "Laravel logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/python-original.svg",
      name: "Python",
      alt: "Python logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/django-original.svg",
      name: "Django",
      alt: "Django logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/flask-original.svg",
      name: "Flask",
      alt: "Laravel logo",
      width: 150,
      height: 150,
    },

  ];
  const hobbies = [
    {
      title: "Eat Ice Cream",
      text: "Mood Booster :)",
      classBg: "bg-icecream",
    },
    {
      title: "Gaming",
      text: "To keep my mind relax",
      classBg: "bg-gaming",
    },
    {
      title: "Learning new technologies/framework",
      text: "To explore and expand my skillsets.",
      classBg: "bg-programming",
    },
    // {
    //   title: "Blog Writing",
    //   text: "To pen down my thoughts",
    //   classBg: "bg-blog",
    // },
    // {
    //   title: "Grocery Shopping",
    //   text: "Buy some of my favourite snacks",
    //   classBg: "bg-grocer",
    // },
    {
      title: "Hacking and Doing CTF ",
      text: "Palatform : TryHackMe, HackTheBox, PicoCTF ",
      classBg: "bg-hacking",
    },
  ];
  const projects = [
    // {
    //   isReverse: true,
    //   title: "Dealer Management System",
    //   titleColor: "text-white",
    //   filterColor: "bg-slate-900 bg-opacity-60",
    //   imageUrl: "/project-ss/order-management.webp",
    //   description: "An dealer management web app for sell car.",
    //   techStack: [
    //     "Codeigniter 3",
    //     "Bootstrap",
    //     "Ajax",
    //     "Jquery",
    //     "Laravel",
    //     "Mysql"
    //   ],
    //   isUrl: true,
    //   urlLink: "https://portal.kumalagroup.co.id/kmg/",
    //   githubLink: "",
    // },
    // {
    //   isReverse: false,
    //   title: "Company Profile Website",
    //   titleColor: "text-white",
    //   filterColor: "bg-slate-900 bg-opacity-60",
    //   imageUrl: "/project-ss/chatapp-ss.webp",
    //   description:
    //     "A company profile website",
    //   techStack: [
    //     "Codeigniter",
    //     "JS",
    //     "Bootstrap",
    //     "Mysql"
    //   ],
    //   isUrl: true,
    //   urlLink: "https://www.pantona-ti.com/",
    //   githubLink: "https://www.pantona-ti.com/",
    // },
    {
      isReverse: true,
      title: "Company Profile Website",
      titleColor: "text-white",
      filterColor: "bg-slate-500 mix-blend-hard-light",
      imageUrl: "/project-ss/djakarta-carwash.png",
      description:
        "A company profile website for car wash",
      techStack: [
        "Nextjs",
        "TailwindCSS",
      ],
      isUrl: true,
      urlLink: "https://www.youtube.com/watch?v=cfui2UPVuZg",
      githubLink: "https://github.com/dirqaharaka/djakarta-carwash-new",
    },
   
  ];
  const workingProjects = [
    {
      image: {
        src: "/work/kumala_logo.jpeg",
        alt: "Kumala",
        width: "410",
        height: "117",
        maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
      },
      imageShowcase: [
        {
          title: "Kumala Honda DMS",
          src: "/work/kumala_honda.png",
          alt: "Kumala Honda DMS",
          width: "800",
          height: "446",
        },
        {
          title: "Kumala Hino DMS",
          src: "/work/kumala_hino.png",
          alt: "Kumala Hino DMS",
          width: "800",
          height: "404",
        },
        {
          title: "Kumala Mercedes DMS",
          src: "/work/kumala_mercedes.png",
          alt: "Kumala Mercedes DMS",
          width: "800",
          height: "637",
        },
        {
          title: "Kumala Marketing DMS",
          src: "/work/kumala_marketing.png",
          alt: "Kumala Marketing DMS",
          width: "800",
          height: "520",
        },
      ],
      heading: "Kumala Group",
      description: `Kumala Group is a competitive company by developing mutually beneficial cooperation between leading national and international brands in various fields. 
      Kumala Group operates in the field of car sales and property business.`,
      teamMembers: [
        {
          name: "IT Kumala Group",
          // linkedIn: "https://www.linkedin.com/in/sylviaachann/",
        },
        // {
        //   name: "Chan Sin Yee",
        //   linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
        // },
      ],
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Codeigniter 3", "Mysql"],
      urls: [
        {
          name: "Kumala Group",
          link: "https://portal.kumalagroup.co.id/kmg/",
        },
        // {
        //   name: "LVLY MY",
        //   link: "https://www.lvly.my/",
        // },
      ],
    },
    // {
    //   image: {
    //     src: "/work/FC-MY.webp",
    //     alt: "Flowerchimp",
    //     width: "410",
    //     height: "205",
    //     maxWidth: "max-w-[60%] md:max-w-[50%] 3xl:max-w-[55%]",
    //   },
    //   imageShowcase: [
    //     {
    //       title: "Product Page",
    //       src: "/work/fc-product-page.png",
    //       alt: "Product Page",
    //       width: "745",
    //       height: "432",
    //     },
    //     {
    //       title: "Product Page - Addon Product Modal",
    //       src: "/work/fc-product-addon-modal.png",
    //       alt: "Product Page - Addon Product Modal",
    //       width: "1000",
    //       height: "492",
    //     },
    //     {
    //       title: "Cart Page",
    //       src: "/work/fc-cart-page.png",
    //       alt: "Cart Page",
    //       width: "745",
    //       height: "476",
    //     },
    //     {
    //       title: "Cart Page - Empty Cart",
    //       src: "/work/fc-empty-cart.png",
    //       alt: "Cart Page - Empty Cart",
    //       width: "745",
    //       height: "351",
    //     },
    //   ],
    //   heading: "Flowerchimp",
    //   // description: `LVLY, Bloomeroo, and Flowerchimp are e-commerce websites for selling flower products.
    //   // This was created using Shopify Liquid, HTML, CSS, and Javascript. Customers can choose their desired
    //   // delivery date and timeslot for their order. It allows customers to select their desired flower products
    //   // , add-on products, and gifts for various occasions. The online stores are available mainly in Southeast
    //   // Asia and Australia.`,
    //   description: `Flowerchimp is an online flower shop that offers a wide selection of beautiful bouquets and
    //   arrangements to suit any occasion. Customers can choose from a variety of flowers, vases and boxes to make
    //   sure their gift is special and unique. The aim was to work on revamping the product page and cart page. 
    //   Making the user interface better and user friendly. The process also includes rewrite the functionality 
    //   to the website slightly faster, improving user experience and making the codebase easier to maintain.`,
    //   teamMembers: [
    //     {
    //       name: "Sylvia Chan",
    //       linkedIn: "https://www.linkedin.com/in/sylviaachann/",
    //     },
    //     {
    //       name: "Chan Sin Yee",
    //       linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
    //     },
    //   ],
    //   techStack: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "jQuery",
    //     "Shopify Liquid",
    //     "Splide",
    //     "Modaal",
    //   ],
    //   urls: [
    //     {
    //       name: "Flowerchimp MY",
    //       link: "https://www.flowerchimp.com/",
    //     },
    //   ],
    // },
    // {
    //   image: {
    //     src: "/work/BR_Logo.webp",
    //     alt: "Bloomeroo",
    //     width: "410",
    //     height: "82",
    //     maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
    //   },
    //   imageShowcase: [
    //     {
    //       title: "Cart Page",
    //       src: "/work/bl-cart.png",
    //       alt: "Cart Page",
    //       width: "800",
    //       height: "543",
    //     },
    //   ],
    //   heading: "Bloomeroo",
    //   // description: `Bloomeroo is an e-commerce website that specializes in selling fresh flowers and providing same-day
    //   // delivery in Australia. The company strives to provide customers with the best selection of flowers, from traditional
    //   // roses to unique tropical and exotic blooms. Our same-day delivery service ensures that no matter where you are in
    //   // the country, you can get the perfect bouquet delivered to your door. `,
    //   description: `Bloomeroo is an e-commerce website that specializes in selling fresh flowers and providing same-day
    //   delivery in Australia. The aim was to work on generating the date picker by postcode input for the cart page. This 
    //   requires user to provide postcode in order to choose their desired delivery date. Moreover, customer can also 
    //   provide their card message and choose addon products before going to checkout page.`,
    //   techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
    //   teamMembers: [
    //     {
    //       name: "Sylvia Chan",
    //       linkedIn: "https://www.linkedin.com/in/sylviaachann/",
    //     },
    //     {
    //       name: "Chan Sin Yee",
    //       linkedIn: "https://www.linkedin.com/in/sin-yee-chan-2865bbaa/",
    //     },
    //   ],
    //   urls: [
    //     {
    //       name: "Bloomeroo",
    //       link: "https://www.bloomeroo.com.au/",
    //     },
    //   ],
    // },
    // {
    //   image: {
    //     src: "/work/cr-footer-logo.webp",
    //     alt: "Cakerush MY",
    //     width: "183",
    //     height: "42",
    //     maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
    //   },
    //   imageShowcase: [
    //     // {
    //     //   title: "Home Page Top Part",
    //     //   src: "/work/cakerush-main.png",
    //     //   alt: "Home Page Top Part",
    //     //   width: "1918",
    //     //   height: "2368",
    //     // },
    //     // {
    //     //   title: "Home Page MultiTab Section",
    //     //   src: "/work/cakerush-tabs.png",
    //     //   alt: "Home Page MultiTab Section",
    //     //   width: "1898",
    //     //   height: "942",
    //     // },
    //     {
    //       title: "Home Page",
    //       src: "/work/cakerush-homepage-revamp.png",
    //       alt: "Home Page",
    //       width: "1920",
    //       height: "6199",
    //     },
    //     {
    //       title: "Explosion Box Product Template",
    //       src: "/work/cakerush-explosion-box-page.png",
    //       alt: "Explosion Box Product Template",
    //       width: "1920",
    //       height: "4847",
    //     },
    //   ],
    //   heading: "Cakerush MY",
    //   description: `Cakerush MY is an innovative online platform offering a wide selection of exquisite cakes and pastries. 
    //   With a user-friendly interface, customers can easily browse and customize their orders for any occasion. From classic 
    //   flavors to personalized designs, each cake is meticulously crafted using the finest ingredients. Cakerush MY ensures 
    //   timely delivery, bringing fresh and visually stunning cakes to your doorstep. Elevate your celebrations with their 
    //   exceptional creations and exceptional service.`,
    //   techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Shopify Liquid"],
    //   teamMembers: [
    //     {
    //       name: "Sylvia Chan",
    //       linkedIn: "https://www.linkedin.com/in/sylviaachann/",
    //     },
    //   ],
    //   urls: [
    //     {
    //       name: "Cakerush MY",
    //       link: "https://www.cakerush.my/",
    //     },
    //   ],
    // },
    // {
    //   image: {
    //     src: "/work/thc-logo.webp",
    //     alt: "The Hacker Collection Website",
    //     width: "62",
    //     height: "65",
    //     maxWidth: "max-w-[70%] md:max-w-[60%] 3xl:max-w-[55%]",
    //   },
    //   imageShowcase: [
    //     {
    //       title: "Home Page",
    //       src: "/work/thc-home-full.png",
    //       alt: "Home Page",
    //       width: "874",
    //       height: "4796",
    //     },
    //     {
    //       title: "Fundraising Page",
    //       src: "/work/thc-fundraising.png",
    //       alt: "Fundraising Page",
    //       width: "805",
    //       height: "5208",
    //     },
    //   ],
    //   heading: "The Hacker Collection Website",
    //   description: `The Hacker Collection (THC) is an innovative landing page website that offers a comprehensive
    //   overview of a company's mission, products, and services. With a modern and user-friendly design, THC offers
    //   an intuitive way to showcase a company's offerings and provides visually appealing and easy-to-understand
    //   information. THC also offers a number of tools, such as a contact form, a blog, and registration forms, to
    //   help customers interact with the company in a meaningful way.`,
    //   techStack: ["Vue", "Nuxt3", "TailwindCSS", "HeadlessUI", "Heroicons"],
    //   teamMembers: [],
    //   urls: [
    //     {
    //       name: "THC Website",
    //       link: "https://hackercollective.co/",
    //     },
    //   ],
    // },
  ];

  const timeline = [
    // {
    //   date: "July 2023",
    //   title: "Started @ JagaApp",
    //   description: "Joined the JagaApp team",
    //   // icon: "",
    //   link: {
    //     text: "Visit JagaApp",
    //     url: "https://jagasolution.com/jagaapp/",
    //   },
    // },
    // {
    //   date: "May 2022",
    //   title: "Started @ Limitless Technologies",
    //   description: "Joined the Limitless Technologies (LTG) team",
    //   // icon: "",
    //   link: {
    //     text: "Visit LTG",
    //     url: "https://limitless.my/",
    //   },
    // },
    {
      date: "January 2023 - January 2024",
      title: "First Developer Role",
      description:
        "Joined Kumala Group as Junior Web Developer",
      // icon: "",
      link: {
        text: "Visit Kumala Group",
        url: "https://kumalagroup.co.id/",
      },
    },
    {
      date: "October 2022 - January 2023",
      title: "Self Taught Journey Begins",
      description:
        "Started my journey in self learning programming (web development) and join bootcamp",
      // icon: "",
    },
    {
      date: "February 2020 - June 2022",
      title: "Work as 3D Carver",
      description:
        "Began my job as a 3D Designer, CNC Machine Operator, and Carver in Hotel Kubah 9 Kendari",
      // icon: "",
      link: {
        text: "Visit Hotel Kubah 9 Kendari",
        url: "https://hotelkubah9.com/",
      },
    },
    {
      date: "July 2019 - February 2020",
      title: "Start University but not graduate 😊",
      description:
        "Not Completed my Bachelor's Degree in Informatic Engineering  at Hasanuddin University only 2 Semester",
      // icon: "",
    },
    {
      date: "September 2018 - July 2019",
      title: "Work as Cashier",
      description:
        "I work as cashier on a restaurant",
      // icon: "",
      
    },
    {
      date: "July 2016 - July 2018",
      title: "Start Senior High School",
      description:
        "Began my study in Public Senior High School 3 Malang",
      // icon: "",
      link: {
        text: "Visit SMAN 3 Malang",
        url: "https://www.sman3-malang.sch.id/",
      },
    },
  ];

  return {
    navigation,
    hobbies,
    skillWithLogo,
    projects,
    workingProjects,
    timeline,
  };
}
