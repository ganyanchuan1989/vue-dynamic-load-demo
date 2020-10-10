<template>
  <div class="about">
    <h1>dynamic mounted</h1>
    <button @click="loadScript">load script</button>
    <div id="sub-app"></div>
  </div>
</template>

<script>
export default {
  name: "DynamicMounted",
  methods: {
    loadScript() {
      // http://127.0.0.1:5500/dist1/demo.html
      this.doLoadJs(
        "http://127.0.0.1:5500/test/app.bc00a90e.js",
        function() {}
      );
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
