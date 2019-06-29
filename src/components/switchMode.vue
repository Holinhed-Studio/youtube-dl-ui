<template>
   <div id="swtichMode" style="text-align:center">
      <button @click="goAdvanced()" v-if="simpleUi" style="background-color:#b090e0">Go Advanced</button><br><br>
      <button @click="goSimple()" v-if="!simpleUi">Go Simple</button>
   </div>
</template>

<script>
export default {
   name: "switchMode",
   data() {
      return {
         simpleUi: true,
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
