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
  async mounted() {
    const response = await fetch("./js/profile/" + this.src + ".json")
    this.output = await response.json()
  },
}
</script>
