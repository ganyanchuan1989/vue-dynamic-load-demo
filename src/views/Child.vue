<template>
  <div>xxx</div>
</template>

<script>
export default {
  props: {
    userId: {
      required: false,
      type: String
    },
    userName: {
      required: false,
      type: String
    }
  },
  created() {
    console.log(">>created", this.userName, { ...this.$props });
  },
  updated() {
    console.log(">>updated", { ...this.$props });
  }
};
</script>

<style></style>
