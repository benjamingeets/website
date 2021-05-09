const description =
  "Etudiant en e-Business depuis 2019, je me suis spécialisé dans le développement web à l'aide de frameworks moderne tels VueJS/NuxtJS, Svelte,...";
const title = "Benjamin Geets :: Développeur web (Tournai \\ Belgique)";
const domain = "https://geets.dev";
const shareImage = domain + "/img/portfolio/benjamingeets.webp";
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: title,
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: description },
      { hid: "og:title", property: "og:title", content: title },
      { hid: "og:image", property: "og:image", content: shareImage },
      {
        hid: "og:description",
        property: "og:description",
        content: description
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      { hid: "twitter:site", name: "twitter:site", content: "@benjamingeets" },
      { hid: "twitter:title", name: "twitter:title", content: title },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description
      },
      { hid: "twitter:image", name: "twitter:image", content: shareImage }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/tailwindcss"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content"
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
