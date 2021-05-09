<template>
    <nuxt-link class="mb-10 mx-2" :to="'/portfolio/'+link" :title="title">
    <div class="w-80 bg-gray-100 rounded-md p-4 h-full" >
        <div class="flex mb-4">
            <div class="w-16 flex justify-center items-center h-16 rounded-md text-3xl" style="background-color:#398B9A;">
                {{emoji}}
            </div>
            <h3 class="flex items-center pl-2 font-bold text-xl">
                {{title}}
            </h3>
        </div>
        <p class="text-lg h-24">{{description}}..</p>
    </div>
    </nuxt-link>
</template>

<script>
export default {
    props:["title","emoji","description","link"]
}
</script>