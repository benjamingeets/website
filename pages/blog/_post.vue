<template>
  <article class="max-w-5xl mx-auto">
    <TopBarArticle
      :date="post.date"
      :titre="post.titre"
      root="/blog"
      :tags="post.tags"
      dmy="3"
    />
    <div class="px-2 pb-10">
      <img class="rounded-md" :src="`/img/blog/header/${post.image}`" alt="" />
    </div>
    <nuxt-content class="bg-gray-100 py-6 rounded-md mx-2" :document="post" />
    <Share root="/blog" :slug="post.slug" target="blog" :titre="post.titre" />
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.post.titre} :: Benjamin Geets`,
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: this.post.titre + " - Benjamin Geets"
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://geets.dev/img/blog/header/" + this.post.image
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.post.description + "..."
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.post.titre + " - Benjamin Geets"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.post.description + "..."
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://geets.dev/img/blog/header/" + this.post.image
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    let post;
    post = await $content("blog", params.post).fetch();
    return { post };
  }
};
</script>
