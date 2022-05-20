<template>
  <div class="topics">
    <div class="icon"><img :src="path" /></div>
    <div class="main">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
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
    description: {
      type: String,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      path: require("@/assets/img/" + this.icon + ".png"),
    }
  },
}
</script>
