<template>
  <Display
    @setBold="setBold"
    :content="content"
    :boldTechno="boldListItem"
    :asideListProps="asideListProps"
    :title="boldListItem"
    type="portfolio"
  />
</template>

<script>
export default {
  async asyncData({ $content }) {
    let portfolio;
    portfolio = await $content("projets")
      .sortBy("date", "desc")
      .fetch();
    return { portfolio };
  },
  data() {
    return {
      boldListItem: "Tout"
    };
  },
  computed: {
    content() {
      let projets = [];
      if (this.boldListItem != "Tout") {
        this.portfolio.forEach(elt => {
          elt.technologies.forEach(techno => {
            if (techno == this.boldListItem && !projets.includes(elt)) {
              projets.push(elt)
            }
          });
        });
      } else {
        projets = this.portfolio;
      }
      return projets;
    },
    asideListProps() {
      let list = [];
      this.portfolio.forEach(element => {
        element.technologies.forEach(techno => {
          if (!list.includes(techno)) {
            list.push(techno);
          }
        });
      });
      return list.sort();
    }
  },
  methods: {
    setBold(value) {
      this.boldListItem = value;
    }
  }
};
</script>
