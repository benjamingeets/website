<template>
    <nav class="w-full text-2xl">
                <ul class="flex lg:max-w-lg justify-between">
                    <li title="Accueil"><nuxt-link to="/" :class="linkStyle"><Home :class="iconStyle" :size="iconSize"/> <p class="ml-1">Accueil</p></nuxt-link></li>
                    <li title="Portfolio"><nuxt-link to="/portfolio" :class="linkStyle"><Folder :class="iconStyle" :size="iconSize"/> <p class="ml-1">Portfolio</p></nuxt-link></li>
                    <li title="Blog"><a target="_blank" href='https://www.notion.so/geets/Benjamin-Geets-Blog-2b2b3ff033e641969da6d875ffd01d91' :class="linkStyle"><Paper :class="iconStyle" :size="iconSize"/> <p class="ml-1">Blog</p></a></li>
                </ul>
            </nav>
</template>

<style scoped>
.nuxt-link-exact-active{
    font-weight: bold;
}
</style>

<script>
import Home from "~/components/icons/Home.vue"
import Folder from "~/components/icons/Folder.vue"
import Paper from "~/components/icons/Paper.vue"
export default {
    data(){
        return{
            iconSize:25,
            linkStyle:"flex items-center",
            iconStyle:"md:inline hidden"
        }
    },
    components:{
        Home,Folder,Paper
    }
}
</script>