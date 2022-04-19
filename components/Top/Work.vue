<template>
  <a v-if="url != null" :href="`${url}`" target="blank">
    <WorkInside :icon="icon" :date="date" :title="title" :type="type" />
  </a>
  <a v-else>
    <WorkInside :icon="icon" :date="date" :title="title" :type="type" />
  </a>
</template>

<script>
import WorkInside from "./WorkInside"
export default {
  components: {
    WorkInside,
  },
  props: {
    url: {
      type: Object,
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
    date: {
      type: Object,
      require: true,
      default: null,
    },
    type: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      style: "",
    }
  },
  mounted() {
    this.style = "background-image: url(img/works/" + this.icon + ".png);"
  },
}
</script>
