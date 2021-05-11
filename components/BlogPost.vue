<template>
  <nuxt-link :to="'/blog/' + slug" class="w-80 mx-2 rounded-md mb-10">
    <img loading="lazy" class="rounded-t-md" :src="'/img/blog/header/' + image"  :alt="title" />
    <div class="bg-gray-100 px-4 py-4 rounded-b-md ">
      <h2 class="font-bold text-md">{{ title }}</h2>
      <p class="my-4 text-sm h-full" :title="description">{{ description }}</p>
      <DateDisplay :date="date" dmy="3"/>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["title", "date", "image", "tags", "description","slug"],
};
</script>
