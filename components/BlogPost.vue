<template>
  <nuxt-link :to="'/blog/' + slug" class="w-80 mx-2 rounded-md mb-10">
    <img loading="lazy" class="rounded-t-md" :src="'/img/blog/header/' + image"  :alt="title" />
    <div class="bg-gray-100 px-4 pb-4 rounded-b-md">
      <div class="flex">
        <Tag v-for='(tag,index) in tags' :key='index' :tag='tag'/>
      </div>
      <h2 class="font-bold text-sm h-12">{{ title }}</h2>
      <p class="h-16 text-sm" :title="description">{{ description }}</p>
      <DateDisplay :date="date" dmy="3"/>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["title", "date", "image", "tags", "description","slug"],
};
</script>
