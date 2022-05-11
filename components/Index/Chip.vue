<template>
  <a :href="`${url}`" target="blank">
    <div class="box">
      <div class="image"><img :src="path" /></div>
      <div class="text">{{ name }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      require: true,
      default: null,
    },
    icon: {
      type: String,
      require: true,
      default: null,
    },
    name: {
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
    this.path = require("~/assets/img/social/" + this.icon)
  },
}
</script>
