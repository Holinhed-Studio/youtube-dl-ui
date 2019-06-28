<template>
  <div id="app">
    <div id="switchpanel">
      <button @click="goAdvanced()" v-if="simpleUi">Go Advanced</button>
      <button @click="goSimple()" v-if="!simpleUi">Go Simple</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  },
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
