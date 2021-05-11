<template>
  <h1 :class="'md:text-4xl text-2xl text-center  text-bold ' + extraStyle">
    {{ text }}
  </h1>
</template>

<script>
export default {
  props: ["text", "extraStyle"]
};
</script>
