<template>
  <div>
    <ul v-for="outputSingle in output" :key="outputSingle.name">
      <li v-if="outputSingle.url != null">
        <a :href="`${outputSingle.url}`" target="blank">
          {{ outputSingle.name }}
        </a>
      </li>
      <li v-else>
        {{ outputSingle.name }}
      </li>
    </ul>
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
  },
  data() {
    return {
      output: [],
    }
  },
  mounted() {
    this.$axios.get("./js/profile/" + this.src + ".json").then((response) => {
      this.output = response.data
    })
  },
}
</script>
