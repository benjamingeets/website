<template>
  <nuxt-link :to="'/blog/' + slug" class="w-80 mx-2 rounded-md mb-10">
    <img loading="lazy" class="rounded-t-md" :src="'/img/blog/header/' + image"  :alt="title" />
    <div class="bg-gray-100 px-4 pb-4 rounded-b-md">
      <div class="flex">
        <span style="background-color:#398B9A;" class="text-white rounded-md px-2 py-1 mr-2 my-2" v-for="(tag, index) in tags" :key="index"><nuxt-link :to="'/blog/tag/' + tag">{{ tag }}</nuxt-link></span>
      </div>
      <h2 class="font-bold text-sm h-12">{{ title }}</h2>
      <p class="h-16 text-sm" :title="description">{{ description }}</p>
      <time class="flex" style="color:#727272;"><Calendar size="20" color="#727272" class="mr-2"/>  {{ formatDate(date) }}</time>
    </div>
  </nuxt-link>
</template>

<script>
import Calendar from "~/components/icons/Calendar.vue"
export default {
  props: ["title", "date", "image", "tags", "description","slug"],
  components:{Calendar},
  methods:{
      formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    }
  }
};
</script>
