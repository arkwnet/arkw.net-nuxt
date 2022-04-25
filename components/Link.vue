<template>
  <div class="link-banner">
    <a :href="href" target="blank">
      <img v-if="src != null" :src="image" :width="width" />
      <span v-if="text != null">{{ text }}</span>
    </a>
  </div>
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
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      image: "",
    }
  },
  mounted() {
    if (this.src != null) {
      this.image = require("~/assets/img/links/" + this.src)
    }
  },
}
</script>
