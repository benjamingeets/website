<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
div {
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
}
.nuxt-content p {
  margin: 10px 50px;
  line-height: 2rem;
}
.nuxt-content p img {
  margin: 40px auto;
}
.nuxt-content ul li {
  margin: 10px 0;
}
.nuxt-content ul li::before {
  content: "- ";
}
.nuxt-content a {
  color: #398b9a;
}
.nuxt-content h2 {
  font-size: 2rem;
  font-weight: bold;
  margin: 30px 50px;;
}
.nuxt-content h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 30px 50px;;
}
.nuxt-content .nuxt-content-highlight{
  margin: 0 40px;
}
@media (max-width: 600px) {
  .nuxt-content h3 {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 30px 50px;;
}
  .nuxt-content p {
    margin: 10px 20px;
    line-height: 2rem;
  }
  .nuxt-content h2{
    margin: 10px 20px;
    font-size:1.5rem;
  }
}
</style>
<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: "https://geets.dev" + this.$route.path
        }
      ]
    };
  }
};
</script>
