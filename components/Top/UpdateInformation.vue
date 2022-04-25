<template>
  <table>
    <tr v-for="historySingle in history" :key="historySingle.Date">
      <th>{{ historySingle.Date }}</th>
      <td>
        <span
          v-for="(contentSingle, index) in historySingle.Content"
          :key="index"
        >
          {{ contentSingle }}
          <br />
        </span>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      updateInformation: "",
      history: [],
    }
  },
  mounted() {
    this.$axios.get("./history.json").then((response) => {
      this.history = response.data.slice(0, 5)
    })
  },
}
</script>
