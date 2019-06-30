<template>
   <div id="simpleui">
      <input id="inputlink" v-model="link" placeholder="Insert URL to load"  />
      <div id="buttons">
         <button id="launch" @click="execute()">Execute!</button>
         <button id="update" @click="updateBin()">Update</button>
      </div>
   </div>
</template>

<script>
export default {
   name: "simple",
   data() {
      return {
         link: ""
      };
   },
   methods: {
      execute() {
         this.$store.commit("getLink", { params: this.link });
         this.$store.dispatch("execute");
      },

      updateBin() {
         this.$store.dispatch("updateBin");
      },
   },

}
</script>

<style scoped>
#inputlink {
  text-align:center;
}

#launch {
  background-color:lightgreen;
  font-weight: bold;
}

#update {
  background-color:pink;
}

#buttons {
  margin-top: 20px;
}
</style>
