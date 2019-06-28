<template>
   <div id="swtichMode">
      <button @click="goAdvanced()" v-if="simpleUi">Go Advanced</button>
      <button @click="goSimple()" v-if="!simpleUi">Go Simple</button>
   </div>
</template>

<script>
export default {
   name: "switchMode",
   data() {
      return {
         simpleUi: false,
      };
   },
   methods: {
      goAdvanced() {
         //console.log("hello world!");
         this.simpleUi = false;
         this.$router.push('/advanced');
      },
      goSimple() {
         this.simpleUi = true;
         this.$router.push('/');
      },
   }
}
</script>

<style>

</style>
