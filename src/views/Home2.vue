<template>
  <div class="home">
    <li v-for="item in items" :key="item.label">
      <span @click="switchIframe(item.id)">{{ item.label }}</span>
    </li>
    <div v-for="item in items" :key="item.id">
      <FrameView v-show="item.id == showId"></FrameView>
    </div>
    <button @click="add">add</button>
  </div>
</template>

<script>
// @ is an alias to /src
import FrameView from "./Frame";

export default {
  name: "Home2",
  components: {
    FrameView
  },
  data: function() {
    return {
      showId: "k1234",
      items: [
        { id: "k1234", label: "l1234" },
        { id: "k1235", label: "l1235" },
        { id: "k1236", label: "l1236" },
        { id: "k1237", label: "l1237" }
      ]
    };
  },
  methods: {
    add() {
      console.log("object");
    },
    switchIframe(id) {
      this.showId = id;
      console.log("id", id);
    }
  }
};
</script>
