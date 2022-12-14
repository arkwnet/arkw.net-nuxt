<template>
  <div class="box" :title="title">
    <nuxt-img :src="`/img/skills/${src}.png`" format="webp" />
    <div class="progress-background"></div>
    <div :class="`progress lv-${lv}`"></div>
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
    lv: {
      type: String,
      require: true,
      default: null,
    },
  },
}
</script>
