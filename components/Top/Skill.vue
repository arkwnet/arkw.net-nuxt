<template>
  <div class="box" :title="title">
    <img :src="path" />
    <div class="progress-background"></div>
    <div :class="`progress lv-${lv}`"></div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      require: true,
      default: null,
    },
    title: {
      type: String,
      require: true,
      default: null,
    },
    lv: {
      type: String,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      path: "",
    }
  },
  mounted() {
    this.path = require("~/assets/img/skills/" + this.icon + ".png")
  },
}
</script>
