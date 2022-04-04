<template>
  <div>
    <h1 class="heading">更新情報</h1>
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
    <p>
      <a href="/history">過去の更新履歴を見る</a>
    </p>
  </div>
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
