<template>
  <div class="w-60 mx-auto">
    <div
      style="border-color:#2c3e50;"
      class="flex rounded-md border-2 mx-auto items-center"
    >
      <input
        class="w-full bg-transparent py-1 pl-2"
        placeholder="Recherche..."
        type="text"
        v-model="query"
        @input="setQuery()"
      />
      <Search v-if="query.length < 1" class="cursor-pointer mx-2" color="#2c3e50" size="25" />
      <Close @click.native='$emit("clear");query = ""' v-else size="25" class="cursor-pointer mx-2" color="#2c3e50"/>
    </div>
  </div>
</template>

<style scoped>
 input:focus, textarea:focus, select:focus{
        outline: none;
    }
</style>

<script>
import Search from "~/components/icons/Search.vue";
import Close from "~/components/icons/Close.vue";
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    setQuery() {
      this.$emit("setQuery", this.query);
    }
  },
  components: { Search,Close }
};
</script>
