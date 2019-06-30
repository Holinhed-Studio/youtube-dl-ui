<template>
   <div id="advancedMenu">
      <customParams />
      <button @click="openLog()">Open Event Log</button>
   </div>
</template>

<script>
import customParams from '@/components/customParams.vue';

export default {
   name: "advanced",
   components: {
      customParams,
   },
   data() {
      return {

      };
   },
   methods: {

      openLog() {
         window.open("http://localhost:8080/#/eventlog");
      },

   }
}
</script>

<style>

</style>
