<template>
  <div class="container">
    <div class="container-left">
      <h1>主页面</h1>
      <div>
        <textarea
          id="txtReceiver"
          v-model="receiverMsg"
          style="width:100%;height: 100px;"
        ></textarea>
      </div>
      <div>
        <input id="txt" v-model="msg" />
        <button @click="sendMsgHandle">发送消息IFrame</button>
      </div>
    </div>
    <div class="container-right">
      <iframe
        id="iframe1"
        style="width: 100%; height: 100%;"
        src="http://127.0.0.1:5500/test/test.html"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FrameView",
  data() {
    return {
      msg: "",
      receiverMsg: ""
    };
  },
  mounted() {
    const _this = this;
    window.addEventListener(
      "message",
      function(e) {
        console.log(">>>.", e);
        _this.receiverMsg += e.data + "\n";
      },
      false
    );
  },
  methods: {
    sendMsgHandle() {
      const frame1 = window.frames[0];
      frame1.postMessage(this.msg, "*");
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
.container-left {
  flex: 1;
  margin-right: 20px;
}
.container-right {
  flex: 1;
}
</style>
