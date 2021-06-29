const description =
  "Etudiant en e-Business depuis 2019, je me suis spécialisé dans le développement web à l'aide de frameworks tels VueJS, Svelte,...";
const title = "Benjamin Geets :: Développeur web (Tournai \\ Belgique)";
const domain = "https://geets.dev";
const shareImage = domain + "/og_image.jpg";

let routes = [];

const createSitemapRoutes = async () => {
  const { $content } = require("@nuxt/content");
  const posts = await $content("blog").fetch();
  posts.forEach(post => {
    routes.push(`blog/${post.slug}`);
  });
  const portfolio = await $content("projets").fetch();
  portfolio.forEach(projet => {
    routes.push(`portfolio/${projet.slug}`);
  });
  return routes;
};

export default {
  target: "static",
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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-32x32.png" }]
  },
  css: [],
  plugins: [],

  generate: {
    fallback: true
  },
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: [
    "@nuxt/content",
    "@nuxtjs/feed",
    "@nuxtjs/sitemap"
  ],
  content: {},
  build: {},
  sitemap: {
    hostname: domain,
    gzip: true,
    routes: createSitemapRoutes
  },
  feed: {
    path: "/feed.xml",
    async create(feed) {
      feed.options = {
        title: "Benjamin Geets :: Blog",
        link: `${domain}/blog/`,
        description: "Etudiant belge et développeur web"
      };
      const { $content } = require("@nuxt/content");
      const posts = await $content("blog").fetch();

      posts.forEach(post => {
        const lien = `${domain}/blog/${post.slug}`;
        feed.addItem({
          title: post.titre,
          image: `${domain}/img/blog/header/${post.image}`,
          id: lien,
          link: lien,
          description: post.description,
          date: new Date(post.date)
        });
      });
    }, 
    cacheTime: 1000 * 60 * 15, 
    type: "rss2"
  }
};
