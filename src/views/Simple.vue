<template>
   <div id="simpleui">
      <label for="inputlink">Link
        <input id="inputlink" name="inputlink" v-model="link" />
      </label>
      <div id="buttons">
         <button id="launch" @click="execute()">Download</button>
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
