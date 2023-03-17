<template>
  <div>
    <div class="breadcrumb">
      <a href="/">{{ $t("link.top") }}</a>
      &gt;
    </div>
    <h1 class="title">{{ $t("heading.update") }}</h1>
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
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      updateInformation: "",
      history: [],
    }
  },
  mounted() {
    this.$axios.get("./history.json").then((response) => {
      this.history = response.data
    })
  },
}
</script>
