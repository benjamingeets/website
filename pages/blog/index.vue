<template>
  <Display
    :portfolio="articles"
    title="Blog"
    type="blog"
    @moreArticles='displayMoreArticles()'
    :displayButton="displayButton"
  />
</template>

<script>
export default {
    data(){
        return{
            articlesQuantity:6,
            displayButton:true
        }
    },
    methods:{
        displayMoreArticles(){
            if(this.articlesQuantity+6 < this.blog_posts.length){
                this.articlesQuantity = this.articlesQuantity+6
            }else{
                this.articlesQuantity = (this.blog_posts.length-this.articlesQuantity) + this.articlesQuantity
                this.displayButton = false
            }
        }
    },
    computed:{
        articles(){
            let articles = []
            for (let index = 0; index < this.articlesQuantity; index++) {
                articles.push(this.blog_posts[index])
            }
            return articles
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
}
</script>