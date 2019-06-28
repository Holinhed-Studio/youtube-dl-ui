<template>
   <div class="customparams">
      Enter custom parameters
      <input v-model="input" name="params" id="params" />
      <button @click="setParams()">Set params</button>  
   </div>
</template>

<script>
import store from '@/store'

export default {
   name: 'customparams',
   data() {
      return {
         input: "",
      };
   },
   methods: {
      setParams() {
         store.commit('setParams', {
            params: this.input,
         });
      }
   }
}
</script>

<style>
.customparams {
   padding: 5px;
   border: 1px solid red;
}
</style>
