<template>
   <div id="advancedMenu">
      <customParams />
   </div>
</template>

<script>
import store from '@/store';
import customParams from '@/components/customParams.vue';

export default {
   name: "advanced",
   components: {
      customParams,
   },
}
</script>

<style>

</style>
