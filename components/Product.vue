<template>
  <a :href="`${url}`">
    <div class="topics">
      <div class="icon"><img :src="path" /></div>
      <div class="main">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: Object,
      require: true,
      default: null,
    },
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
    description: {
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
    this.path = require("~/assets/img/products/" + this.icon + ".png")
  },
}
</script>
