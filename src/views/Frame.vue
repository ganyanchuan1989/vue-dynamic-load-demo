<template>
  <div>
    <textarea></textarea>
    <iframe src="http://127.0.0.1:5500/public/test.html" />
  </div>
</template>

<script>
export default {
  name: "FrameView",
  beforeDestroy() {
    console.log(",,,,,,,,,,");
  }
};
</script>

<style></style>
