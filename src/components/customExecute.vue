<template>
   <div class="customexecute">
      <div>
         <label for="params">
            custom launch options
            <input v-model="input" name="params" id="params" />
         </label>
      </div>
      <div>
         <label for="current">
            Use current links
            <input type="checkbox" name="current" id="checkbox" v-model="currentlinks">
         </label>
      </div>
      <button @click="runCustom()">Execute</button>  
   </div>
</template>

<script>

export default {
   name: 'customexecute',

   methods: {
      runCustom() {
         
         this.$store.dispatch("runCustom");

      }
   },
   computed: {

      input: {
         get() {
            return this.$store.state.customExecute.input;
         },

         set(newVal) {
            return this.$store.dispatch('setCustomExecute', newVal);
         },
      },

      currentlinks: {
         get() {
            return this.$store.state.customExecute.useCurrent;
         },

         set(newVal) {
            return this.$store.dispatch('setUseCurrentLinks', newVal);
         },
      }
   }
}
</script>

<style scoped>
div {
   margin-top: 5px;
   margin-bottom: 5px;
}
</style>
