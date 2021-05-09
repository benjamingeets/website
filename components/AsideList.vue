<template>
  <aside v-if="asideListProps">
    <ul class="absolute left-10 xl:block hidden">
      <li>
        <span class="font-bold cursor-default" v-if="boldItem == 'Tout'">Tout</span>
        <span @click="setBold('Tout')" class="cursor-pointer" v-else>Tout</span>
      </li>
      <li v-for="(item, index) in asideListProps" :key="index">
        <span
          @click="setBold(item)"
          class="cursor-pointer"
          v-if="item != boldItem"
          >{{ item }}</span
        >
        <span class="font-bold cursor-default" v-else>{{ item }}</span>
      </li>
    </ul>
    <div>
      <select
        v-model="choice"
        class="block my-8 xl:hidden mx-auto border-2 rounded-md"
        @change="setBold(choice)"
      >
        <option>Tout</option>
        <option v-for="(item, index) in asideListProps" :key="index">{{
          item
        }}</option>
      </select>
    </div>
  </aside>
</template>

<script>
export default {
  props: ["asideListProps", "boldItem"],
  data() {
    return {
      choice: "Tout"
    };
  },
  methods: {
    setBold(item) {
      this.choice = item;
      this.$emit("setBold", item);
      console.log(item);
    }
  }
};
</script>
