<template>
  <div :class="[heightAuto == true ? 'topics height-auto' : 'topics']">
    <div class="icon"><nuxt-img :src="`/img/${src}.png`" format="webp" /></div>
    <div class="main">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
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
    heightAuto: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
