<template>
  <a v-if="href != null" :href="`${href}`">
    <div :style="style"></div>
  </a>
  <a v-else>
    <div :style="style"></div>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      style:
        "background: url('/img/header/" +
        this.src +
        "') 0 0 no-repeat; background-size: contain;",
    }
  },
}
</script>
