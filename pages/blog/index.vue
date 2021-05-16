<template>
  <Display
    :content="articles"
    title="Blog"
    type="blog"
    @moreArticles="displayMoreArticles()"
    :displayButton="displayButton"
    @setQuery="changeContent"
  />
</template>

<script>
export default {
  data() {
    return {
      articlesQuantity: 6,
      displayButton: true,
      searchQuery: ""
    };
  },
  methods: {
    displayMoreArticles() {
      if (this.articlesQuantity + 6 < this.blog_posts.length) {
        this.articlesQuantity = this.articlesQuantity + 6;
      } else {
        this.articlesQuantity = this.blog_posts.length;
        this.displayButton = false;
      }
    },
    changeContent(value) {
      this.searchQuery = value.toLowerCase();
    }
  },
  computed: {
    articles() {
      let articles = [];
      let limite;
      if (this.searchQuery != "") {
        //S'il n'y a pas de recherche
        limite = this.blog_posts.length;
      } else {
        limite = this.articlesQuantity;
      }
      for (let index = 0; index < limite; index++) {
        if (this.searchQuery == "") {
          articles.push(this.blog_posts[index]);
        } else {
          if (
            this.blog_posts[index].titre
              .toLowerCase()
              .includes(this.searchQuery)
          ) {
            articles.push(this.blog_posts[index]);
          }
        }
      }
      if (articles.length % 6 != 0 || articles.length == 0) {
        this.displayButton = false;
      } else {
        this.displayButton = true;
      }
      return articles;
    }
  },
  async asyncData({ $content }) {
    let blog_posts;
    blog_posts = await $content("blog")
      .sortBy("date")
      .fetch();
    blog_posts = blog_posts.reverse();
    return { blog_posts };
  }
};
</script>
