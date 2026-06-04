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

<script setup>
import { ref, onMounted } from "vue"
const history = ref([])
onMounted(async () => {
  const response = await fetch("/latest.json")
  history.value = await response.json()
})
</script>
