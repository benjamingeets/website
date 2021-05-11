<template>
  <div class="md:flex-row flex flex-col xl:my-16 my-8 mx-2">
    <div class="md:w-2/12 w-12/12">
      <GreenButton
        class ="md:mb-0 mb-6"
        @click.native="$router.push(root)"
      >
        <ArrowLeft color="#398B9A" size="20" />Retour
      </GreenButton>
    </div>
    <div class="md:w-8/12 w-12/12 flex items-center flex-col">
      <Title :text="titre" />
      <DateDisplay :date="date" :dmy="dmy" class="flex mt-4 flex-wrap items-center justify-center"/>
    </div>
    <div class="w-2/12"></div>
  </div>
</template>

<script>
import ArrowLeft from "~/components/icons/ArrowLeft.vue";
export default {
  components: { ArrowLeft },
  props: ["date", "titre","root","tags","dmy"]
};
</script>
