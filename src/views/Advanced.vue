<template>
   <div id="advancedMenu">
      <hr />
      <customExecute />
      <hr />
      <button @click="openLog()">Open Event Log</button>
   </div>
</template>

<script>
import customExecute from '@/components/customExecute.vue';

export default {
   name: "advanced",
   components: {
      customExecute,
   },
   data() {
      return {

      };
   },
   methods: {

      openLog() {
         window.open("/#/eventlog", "EVENT LOG");
      },

   }
}
</script>

<style>

</style>
