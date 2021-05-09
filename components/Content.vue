<template>
  <main class="flex flex-wrap justify-evenly">
    <template v-if="(type == 'portfolio')">
      <PortfolioProject
        v-for="(projet, index) in portfolio"
        :key="index"
        :emoji="projet.emoji"
        :title="projet.titre"
        :description="projet.description"
        :link="projet.slug"
      />
    </template>
    <template v-else>
      <BlogPost v-for='(article,index) in portfolio' :key="index" :title='article.titre' :date='article.date' :image='article.image' :tags='article.tags' :description='article.description' :slug="article.slug"/>
    </template>
  </main>
</template>
<script>
export default {
  props: ["portfolio","type"]
};
</script>
