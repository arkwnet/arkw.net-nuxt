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
      history: [],
    }
  },
  async mounted() {
    const response = await fetch("/history.json")
    const json = await response.json()
    this.history = json.slice(0, 5)
  },
}
</script>
