<template>
  <a v-if="href != null" :href="`${href}`" target="blank">
    <CardInside
      :src="src"
      :title="title"
      :description="description"
      :height-auto="heightAuto"
    />
  </a>
  <a v-else>
    <CardInside
      :src="src"
      :title="title"
      :description="description"
      :height-auto="heightAuto"
    />
  </a>
</template>

<script>
import CardInside from "./CardInside.vue"
export default {
  components: {
    CardInside,
  },
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
