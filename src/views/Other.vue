<template>
  <div>
    <Parent :userName="userName" :userId="userId"></Parent>
    <button @click="change">change</button>
  </div>
</template>

<script>
import Parent from "./Parent.vue";
let count = 0;
export default {
  name: "Other",
  components: {
    Parent
  },
  data() {
    return {
      userName: "false",
      userId: "false"
    };
  },
  methods: {
    change() {
      this.userName = "aaa" + count;
      this.userId = "xxx" + count;
      count++;
    }
  }
};
</script>

<style></style>
