<template>
    <button
          style="border:1px solid #398B9A; color:#398B9A;"
          :class="'flex items-center rounded-md px-4 py-2 '+ extraStyle"
        >
          <slot></slot>
        </button>
</template>


<script>
export default {
  props:["extraStyle"]
}
</script>