<template>
   <div id="swtichMode">
      <button id="switchButton" @click="changeMode()">Go {{ newMode }}</button>
   </div>
</template>

<script>
export default {
   name: "switchMode",
   data() {
      return {
        newMode: "advanced"
      };
   },
   methods: {
      changeMode() {
         this.$store.state.simpleUI = !this.$store.state.simpleUI;
         this.newMode = this.$store.state.simpleUI ? "advanced" : "simple";
      },
   }
}
</script>

<style scoped>

</style>
