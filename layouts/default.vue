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
@font-face {
 font-family: "happy times";
 src: url("/happy-times-NG_bold_master.otf") format("otf")
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
