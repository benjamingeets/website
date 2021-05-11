<template>
  <div class="border-2 rounded-md flex md:flex-row flex-col mx-2">
    <img
      class="md:w-10/12 w-full rounded-l-md"
      :src="`/img/portfolio/${image}`"
      alt=""
    />
    <div
      class="md:w-2/12 w-12/12 flex md:justify-center items-center md:flex-col md:my-0 my-5 justify-evenly flex-row"
    >
      <a
        class="md:mb-10"
        v-if="url != null"
        target="_blank"
        :href="`https://${url}`"
      >
        <GreenButton>Voir le site</GreenButton>
      </a>
      <a v-if="github != null" target="_blank" :href="`https://${github}`">
        <GreenButton>Voir le code</GreenButton>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "url", "github"]
};
</script>
