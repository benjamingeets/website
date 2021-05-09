<template>
  <article class="max-w-5xl mx-auto">
    <div class="flex">
      <div class="w-4/12">
        <button
          style="border:1px solid #398B9A; color:#398B9A;"
          class="mx-auto flex items-center rounded-md px-4 py-2"
          @click="$router.push('/portfolio')"
        >
          Retour
        </button>
      </div>
      <div class="w-4/12 flex items-center flex-col">
        <h1 class="text-4xl text-center">{{ projet.titre }}</h1>
        <DateDisplay :date="projet.date" dmy="2" />
      </div>
      <div class="w-4/12"></div>
    </div>
  </article>
</template>

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
  }
};
</script>
