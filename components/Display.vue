<template>
  <div class="static oui">
    <Title :text="titleToDisplay" extraStyle="xl:my-16 my-8" />
    <div class="max-w-5xl mx-auto">
      <AsideList
        v-if="type == 'portfolio'"
        @setBold="setBold"
        :asideListProps="asideListProps"
        :boldItem="title"
      />
      <Content :content="content" :type="type" />
    </div>
    <GreenButton
      @click.native="$emit('moreArticles')"
      v-if="type == 'blog' && displayButton"
      extraStyle="mx-auto"
    >
      Voir plus d'articles <ArrowDown size="20" color="#398B9A" />
    </GreenButton>
  </div>
</template>

<script>
import ArrowDown from "~/components/icons/ArrowDown.vue";
export default {
  props: ["asideListProps", "title", "content", "type", "displayButton"],
  components: { ArrowDown },
  methods: {
    setBold(value) {
      this.$emit("setBold", value);
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
