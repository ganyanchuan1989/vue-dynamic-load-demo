<template>
  <div class="home">
    <button @click="loadScript">load remote script</button>
    <div v-for="comp in comps" :key="comp">
      <component v-bind:is="comp"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      comps: []
    };
  },
  methods: {
    loadScript() {
      const _this = this;
      // http://127.0.0.1:5500/dist1/demo.html
      this.doLoadJs("http://127.0.0.1:5500/test/myLib.umd.js", function() {
        window.Vue.component("myLib", window.myLib);
        _this.comps.push("myLib");
      });
    },
    doLoadJs(url, callback) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      if (typeof callback != "undefined") {
        if (script.readyState) {
          script.onreadystatechange = function() {
            if (
              script.readyState == "loaded" ||
              script.readyState == "complete"
            ) {
              script.onreadystatechange = null;
              callback();
            }
          };
        } else {
          script.onload = function() {
            callback();
          };
        }
      }
      script.src = url;
      document.body.appendChild(script);
    }
  }
};
</script>
