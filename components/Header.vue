<template>
    <header class="border-b-2 md:px-20 px-4 py-5">
        <h1 class="md:text-4xl sm:text-3xl text-2xl lg:text-left text-center font-bold">Benjamin Geets</h1>
        <div class="flex justify-between pt-5 items-center">
            <Navbar/>
            <button class="border-2 px-8 py-2 rounded-md items-center hover:bg-gray-200 duration-300 lg:flex hidden"><RSS color="#2c3e50" :size="iconSize"/>Suivre</button>
        </div>
    </header>
</template>

<script>
import RSS from "~/components/icons/RSS.vue"
export default {
    data(){
        return{
            iconSize:20
        }
    },
    components:{
        RSS
    }
}
</script>