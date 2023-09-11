<template>
  <a :href="`${href}`" target="blank" :title="alt">
    <div class="box">
      <div class="image"><img :src="path" :alt="alt" /></div>
      <div class="text">{{ name }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      require: true,
      default: null,
    },
    src: {
      type: String,
      require: true,
      default: null,
    },
    name: {
      type: String,
      require: true,
      default: null,
    },
    alt: {
      type: String,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      path: "",
    }
  },
  mounted() {
    this.path = require("~/assets/img/social/" + this.src)
  },
}
</script>
