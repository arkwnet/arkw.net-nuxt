<template>
  <div class="works-box" :style="style">
    <div class="works-box-text">
      <h2>{{ date }}</h2>
      <h1>{{ title }}</h1>
      <div class="works-box-inside">
        <div v-for="(t, index) in type" :key="index" :class="t.id">
          {{ t.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
