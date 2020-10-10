<template>
  <div>
    <Child v-bind="this.$props"></Child>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  components: {
    Child
  },
  props: ["userName", "userId"]
};
</script>

<style></style>
