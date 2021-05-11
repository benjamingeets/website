<template>
    <button
          :class="'flex items-center rounded-md px-4 py-2 '+ extraStyle"
        >
          <slot></slot>
        </button>
</template>

<style scoped>
*{
  transition: 300ms all ease-in-out;
}
button{
  border:1px solid #398B9A; 
  color:#398B9A;
}
button:hover{
  background: #EEE;
}
</style>

<script>
export default {
  props:["extraStyle"]
}
</script>