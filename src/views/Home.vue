<template>
  <div class="home">
    <SwitchMode />
    <SimpleUI v-if="this.$store.state.simpleUI" />
    <AdvancedUI v-if="!this.$store.state.simpleUI" />
  </div>
</template>

<script>
// @ is an alias to /src
import AdvancedUI from '@/views/Advanced.vue';
import SimpleUI from '@/views/Simple.vue';
import SwitchMode from '@/components/switchMode.vue';

export default {
  name: "home",
  components: {
    AdvancedUI,
    SimpleUI,
    SwitchMode,
  },
  data() {
    return {
    };
  },
  mounted() {
    //window.open('http://localhost:8080/#/eventlog');
  },
  methods: {

  }
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
