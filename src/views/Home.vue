<template>
  <div class="home">
  <customParams></customParams>
  <button @click="testCall()">testCall</button>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store';
import customParams from '@/components/customParams.vue'

export default {
  name: 'home',
  components: {
    customParams,
  },
  methods: {
    testCall() {
      
      store.dispatch('testCall');

    },
  }
}
</script>
