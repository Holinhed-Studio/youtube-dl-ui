<template>
  <div class="home">
    <input v-model="link" @input="getLink()" placeholder="Insert URL" />
    <button @click="testCall()" style="background-color:lightgreen">
      <b>Execute!</b>
    </button>
    <button @click="updateBin()" style="background-color:pink">
      Update
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store";

export default {
  name: "home",
  components: {},
  data() {
    return {
      link: ""
    };
  },
  methods: {
    testCall() {
      store.dispatch("testCall");
    },

    updateBin() {
        store.dispatch("updateBin");
    },

    getLink() {
      this.$store.commit("getLink", { params: this.link });
    }
  }
};
</script>