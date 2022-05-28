<template>
  <a v-if="href != null" :href="`${href}`" target="blank">
    <WorkInside :src="src" :date="date" :title="title" :type="type" />
  </a>
  <a v-else>
    <WorkInside :src="src" :date="date" :title="title" :type="type" />
  </a>
</template>

<script>
import WorkInside from "./WorkInside"
export default {
  components: {
    WorkInside,
  },
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
    title: {
      type: String,
      require: true,
      default: null,
    },
    date: {
      type: String,
      require: true,
      default: null,
    },
    type: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      style: "",
    }
  },
}
</script>
