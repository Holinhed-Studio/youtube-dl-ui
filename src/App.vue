<template>
  <div id="app" style="background-color:#eff">
    <switchMode />
    <router-view />
  </div>
</template>

<script>
import switchMode from '@/components/switchMode.vue';

export default {
  name: 'app',
  components: {
    switchMode,
  },
  data() {
    return {
      
    };
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
