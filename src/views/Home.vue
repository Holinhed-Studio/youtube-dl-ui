<template>
  <div class="home">
    <button @click="testCall()">Execute!</button>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store';

export default {
  name: 'home',
  components: {
    
  },
  methods: {
    testCall() {
      
      store.dispatch('testCall');

    },
  }
}
</script>
