<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
div {
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
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
