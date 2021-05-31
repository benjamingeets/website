<template>
  <main class="max-w-5xl mx-auto px-2">
    <div style="background:url('/foug.jpg');background-size:cover;background-color:#398B9A;" class="text-white px-8 py-12 rounded-md mt-20">
      <h2 class="lg:text-6xl md:text-5xl text-4xl font-bold">Benjamin Geets</h2>
      <h3 class="mt-6 mb-10 md:text-2xl text-md">Etudiant \ Développeur web, Tournai</h3>
       <Social size="45" color="#fff"/>
    </div>
    <div class="flex py-14 px-4 md:flex-row flex-col">
      <div class="max-w-xs mx-auto">
        <img class="rounded-md" src="~/assets/images/benjamingeets.webp" alt="Benjamin Geets" title="Benjamin Geets">
      </div>
      <div class="md:w-9/12 w-12/12 lg:leading-10 leading-8 md:pl-10 pl-0 md:pt-0 pt-10 flex items-center lg:text-xl text-lg ">
        <nuxt-content :document="infos" />
      </div>
    </div>
  </main>
</template>

<style scoped>

.nuxt-content p{
    margin:0;
  }

</style>

<script>
import CV from "~/components/icons/CV.vue"
import Github from "~/components/icons/Github.vue"
import Mail from "~/components/icons/Mail.vue"
import Linkedin from "~/components/icons/Linkedin.vue"
import Twitter from "~/components/icons/Twitter.vue"

export default {
    data(){
        return{
            iconSize:45,
            iconColor:"#ffffff",
            iconStyle:"transform hover:rotate-45 duration-300 cursor-pointer"
        }
    },
      async asyncData({ $content }) {
    let infos;
    infos = await $content("infos").fetch();
    return { infos };
  },
    components:{
        CV,Twitter,Github,Mail,Linkedin
    }
}
</script>