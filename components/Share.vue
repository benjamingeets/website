<template>
  <div class="mt-10 flex justify-center">
    <GreenButton
      @click.native="$router.push(root)"
      class="sm:mx-2 mx-1"
      ><ArrowLeft size="25" color="#398B9A" />Retour</GreenButton
    >
    <a
      :href="
        `http://twitter.com/share?url=geets.dev/${target}/${slug}&text=&quot;${titre}&quot;, via @benjamingeets`
      "
      target="_blank"
      class="sm:mx-2 mx-1"
      ><GreenButton><Twitter size="25" color="#398B9A"/></GreenButton
    ></a>
    <a
      :href="
        `https://www.facebook.com/sharer/sharer.php?u=https://geets.dev/${target}/${slug}`
      "
      target="_blank"
      class="sm:mx-2 mx-1"
      ><GreenButton><Facebook size="25" color="#398B9A"/></GreenButton
    ></a>
    <a
      :href="
        `https://www.linkedin.com/shareArticle?mini=true&url=https://geets.dev/${target}/${slug}`
      "
      target="_blank"
      class="sm:mx-2 mx-1"
      ><GreenButton><Linkedin size="25" color="#398B9A"/></GreenButton
    ></a>
  </div>
</template>

<script>
import Linkedin from "~/components/icons/Linkedin.vue";
import Twitter from "~/components/icons/Twitter.vue";
import Facebook from "~/components/icons/Facebook.vue";
import ArrowLeft from "~/components/icons/ArrowLeft.vue";
export default {
  components: { Twitter, Linkedin, Facebook, ArrowLeft },
  props: ["root", "slug", "titre", "target"]
};
</script>
