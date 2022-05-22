<template>
  <a v-if="url != null" :href="`${url}`" target="blank">
    <CardInside
      :icon="icon"
      :title="title"
      :description="description"
      :height-auto="heightAuto"
    />
  </a>
  <a v-else>
    <CardInside
      :icon="icon"
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
