<template>
 <div class="home">
    <input v-model="link" @input="getLink()" placeholder="Insert URL">
    <button @click="testCall()" style="background-color:lightgreen"><b>Execute!</b></button>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store';

export default {
  name: 'home',
    components: {
    
    },
    data() {
    return {
        link: "",
    };
     },
    methods: {
        testCall() {
      
        store.dispatch('testCall');

        },
        getLink() {
        this.$store.commit('getLink', { params: this.link });
        },
    },
}
</script>