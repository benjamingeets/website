<template>
    <time class="flex" style="color:#727272;"><Calendar size="20" color="#727272" class="mr-2"/>  {{ formatDate(date) }}</time>
</template>
<script>
import Calendar from "~/components/icons/Calendar.vue"
export default {
    props:["date","dmy"],
  components:{Calendar},
      methods:{
      formatDate(date) {
        let options
      switch (this.dmy) {
        case "1":
          options = { year: 'numeric'}
          break;
        case "2":
        options = { year: 'numeric', month: 'long'}
          break;
        case "3":
        options = { year: 'numeric', month: 'long', day: 'numeric' }
          break;      
        default:
        options = { year: 'numeric', month: 'long', day: 'numeric' }
          break;
      }
      return new Date(date).toLocaleDateString('fr', options)
    }
  }
}
</script>