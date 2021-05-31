<template>
    <div :class="'flex mt-4 ' + justify">
            <ul class="flex">
          <li :class="liStyle" title="Contact"><a target="_blank" href="#" id="mail" @click="contact()" ><Mail :class="iconStyle" :size="size" :color="color"/></a></li>
          <li :class="liStyle" title="Github"><a href="http://github.com/benjamingeets" target="_blank"><Github :class="iconStyle" :size="size" :color="color"/></a></li>
          <li :class="liStyle" title="Linkedin"><a href="http://linkedin.com/in/benjamingeets" target="_blank"><Linkedin :class="iconStyle" :size="size" :color="color"/></a></li>
          <li :class="liStyle" title="CV"><a href="https://www.notion.so/geets/Benjamin-Geets-99a84be8748541249cbbe3e820439c70" target="_blank"><CV :class="iconStyle" :size="size" :color="color"/></a></li>
        </ul>
        </div>
</template>

<script>
import CV from "~/components/icons/CV.vue"
import Github from "~/components/icons/Github.vue"
import Mail from "~/components/icons/Mail.vue"
import Linkedin from "~/components/icons/Linkedin.vue"

export default {
    props:["size","color","justify"],
    data(){
        return{
            iconStyle:"transform hover:rotate-45 duration-300 cursor-pointer",
            liStyle:"md:mx-2 mx-1"
        }
    },
    components:{
        CV,Github,Mail,Linkedin
    },
    methods:{
        contact() {
      const lienMail = document.querySelectorAll("#mail");
      lienMail.forEach(element =>{
          element.href = "mailto:benjamin@geets.dev"
      })
    }
    }
}
</script>