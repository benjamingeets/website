<template>
    <span style="background-color:#398B9A;" class="text-white rounded-md px-2 py-1 mr-2 my-2"><nuxt-link :to="`/blog/tag/${tag}`">{{ tag }}</nuxt-link></span>
</template>

<script>
export default {
    props:["tag"]
}
</script>