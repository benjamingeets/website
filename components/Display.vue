<template>
  <div class="static oui">
    <h1 class="text-4xl text-center text-bold xl:my-16 my-8">
      {{ titleToDisplay }}
    </h1>
    <div class="max-w-5xl mx-auto">
      <AsideList
        v-if="type == 'portfolio'"
        @setBold="setBold"
        :asideListProps="asideListProps"
        :boldItem="title"
      />
      <Content :portfolio="portfolio" :type="type" />
    </div>
    <button
      style="border:1px solid #398B9A; color:#398B9A;"
      class="mx-auto flex items-center rounded-md px-4 py-2"
      @click="moreArticles()"
      v-if="type == 'blog' && displayButton"
    >
      Voir plus d'articles <ArrowDown size="20" color="#398B9A" />
    </button>
  </div>
</template>

<script>
import ArrowDown from "~/components/icons/ArrowDown.vue";
export default {
  props: ["asideListProps", "title", "portfolio", "type", "displayButton"],
  components: { ArrowDown },
  methods: {
    setBold(value) {
      this.$emit("setBold", value);
    },
    moreArticles() {
      this.$emit("moreArticles");
    }
  },
  computed: {
    titleToDisplay() {
      let titleDisplay;
      if (this.title == "Tout") {
        titleDisplay = "Portfolio";
      } else {
        titleDisplay = this.title;
      }
      return titleDisplay;
    }
  }
};
</script>

<style scoped>
.oui {
  min-height: 60vh;
}
</style>
