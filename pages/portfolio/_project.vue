<template>
  <article class="max-w-5xl mx-auto">
    <TopBarArticle :date="projet.date" :titre="projet.titre" dmy="2" root='/portfolio'/>
    <ImageArticle :image="projet.image" :url="url" :github="github" />
    <div class="flex justify-evenly my-8">
      <span v-for="(techno, index) in projet.technologies" :key="index">{{
        techno
      }}</span>
    </div>
    <nuxt-content class="bg-gray-100 py-6 rounded-md mx-2" :document="projet" />
    <Share root="/portfolio" :target="'portfolio'" :slug="projet.slug" :titre="projet.titre"/>
  </article>
</template>

<style>
.nuxt-link-active[href='/portfolio']{
  font-weight: bold;
}
</style>

<script>
export default {
  head() {
    return {
      title: this.projet.titre + " :: Benjamin Geets",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Porfolio : " + this.projet.titre + " - Benjamin Geets"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://geets.dev/img/portfolio/" + this.projet.image
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.projet.description + "..."
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Porfolio : " + this.projet.titre + " - Benjamin Geets"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.projet.description + "..."
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://geets.dev/img/portfolio/" + this.projet.image
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    let projet;
    projet = await $content("projets", params.project).fetch();
    return { projet };
  },
  computed: {
    url() {
      let lien;
      if (this.projet.site.disponible) {
        lien = this.projet.site.url;
      } else {
        lien = null;
      }
      return lien;
    },
    github() {
      let lien;
      if (this.projet.git.disponible) {
        lien = this.projet.git.url;
      } else {
        lien = null;
      }
      return lien;
    }
  }
};
</script>
