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
      type: Object,
      require: true,
      default: null,
    },
    title: {
      type: Object,
      require: true,
      default: null,
    },
    lv: {
      type: Object,
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
