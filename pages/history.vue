<template>
  <div>
    <div class="breadcrumb">
      <nuxt-link :to="localePath('/')">{{ $t("link.top") }}</nuxt-link>
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
      history: [],
    }
  },
  async mounted() {
    const response = await fetch("/history.json")
    this.history = await response.json()
  },
}
</script>
