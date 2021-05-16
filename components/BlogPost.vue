<template>
  <nuxt-link :to="'/blog/' + slug" class="w-80 mx-2 bg-gray-100 rounded-md mb-10 hover:shadow-md transition duration-300 flex flex-col justify-between">
    <div><img loading="lazy" class="rounded-t-md" :src="'/img/blog/header/' + image"  :alt="title" />
    <div class="bg-gray-100 px-4 py-4 rounded-b-md ">
      <h2 class="font-bold text-md">{{ title }}</h2>
      <p class="my-4 text-sm h-full" :title="description">{{ description }}</p>
    </div></div>
    <DateDisplay class="px-4 mb-4" :date="date" dmy="3"/>
  </nuxt-link>
</template>

<script>
export default {
  props: ["title", "date", "image", "tags", "description","slug"],
};
</script>
