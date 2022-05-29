<template>
  <div class="box" :style="style">
    <div class="text">
      <h2>{{ date }}</h2>
      <h1>{{ title }}</h1>
      <div class="inside">
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
    position: {
      type: String,
      default: "top",
    },
  },
  data() {
    return {
      style: "",
    }
  },
  mounted() {
    this.style =
      "background-image: url('img/works/" +
      this.src +
      ".png'); background-position: center " +
      this.position
  },
}
</script>
