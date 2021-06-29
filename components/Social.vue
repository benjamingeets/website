<template>
    <div :class="'flex mt-4 ' + justify">
            <ul class="flex flex-wrap">
            <!--<li :class="liStyle" title="Twitter"><a href="http://twitter.com/benjamingeets" target="_blank"><Twitter :class="iconStyle" :size="size" :color="color"/></a></li>-->
          <li :class="liStyle" title="Contact"><a target="_blank" href="#" id="mail" @click="contact()" ><Mail :class="iconStyle" :size="size" :color="color"/></a></li>
          <li :class="liStyle" title="Github"><a href="http://github.com/benjamingeets" target="_blank"><Github :class="iconStyle" :size="size" :color="color"/></a></li>
          <li :class="liStyle" title="Linkedin"><a href="http://linkedin.com/in/benjamingeets" target="_blank"><Linkedin :class="iconStyle" :size="size" :color="color"/></a></li>
          <!--<li :class="liStyle" title="CV"><a href="https://www.notion.so/geets/Benjamin-Geets-99a84be8748541249cbbe3e820439c70" target="_blank"><CV :class="iconStyle" :size="size" :color="color"/></a></li>-->
        <li :class="liStyle + ' text-white text-3xl flex justify-center items-center hover:text-green-600 hover:border-green-600 duration-300 border-2 rounded-md px-2' " ><a target="_blank" href="https://www.notion.so/geets/f4051e384b694f2ca309d2467cee58ed?v=a1c0a56b446b489bb48aa07c1e0f000e">Portfolio</a></li>
        </ul>
        </div>
</template>

<script>
import CV from "~/components/icons/CV.vue"
import Github from "~/components/icons/Github.vue"
import Mail from "~/components/icons/Mail.vue"
import Linkedin from "~/components/icons/Linkedin.vue"
import Twitter from "~/components/icons/Twitter.vue"

export default {
    props:["size","color","justify"],
    data(){
        return{
            iconStyle:"transform hover:rotate-45 duration-300 cursor-pointer",
            liStyle:"md:mx-2 mx-1"
        }
    },
    components:{
        CV,Github,Mail,Linkedin,Twitter
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