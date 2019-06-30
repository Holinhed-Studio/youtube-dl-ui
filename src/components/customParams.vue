<template>
   <div class="customparams">
      Enter custom parameters
      <input v-model="input" name="params" id="params" />
      <button @click="setParams()">Save Changes</button>  
   </div>
</template>

<script>

export default {
   name: 'customparams',
   data() {
      return {
         input: "",
      };
   },
   methods: {
      setParams() {
         this.$store.commit('setParams', { params: this.input });
      }
   }
}
</script>

<style scoped>

</style>
