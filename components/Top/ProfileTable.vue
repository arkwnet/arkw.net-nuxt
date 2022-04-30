<template>
  <table>
    <tr v-for="outputSingle in output" :key="outputSingle.head">
      <th>{{ outputSingle.head }}</th>
      <td v-if="outputSingle.url != null">
        <a :href="`${outputSingle.url}`" target="blank">
          {{ outputSingle.data }}
        </a>
      </td>
      <td v-else>
        {{ outputSingle.data }}
      </td>
    </tr>
  </table>
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
