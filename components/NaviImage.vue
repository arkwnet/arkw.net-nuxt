<template>
  <a v-if="url != null" :href="`${url}`">
    <div :style="style"></div>
  </a>
  <a v-else>
    <div :style="style"></div>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      style: "",
    }
  },
  mounted() {
    this.style =
      "background: url('img/header/" +
      this.image +
      "') 0 0 no-repeat; background-size: contain;"
  },
}
</script>
