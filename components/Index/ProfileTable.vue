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

<script setup>
import { ref, onMounted } from "vue"
const props = defineProps({
  src: {
    type: String,
    required: true,
    default: null,
  },
})
const output = ref([])
onMounted(async () => {
  const response = await fetch(`/js/profile/${props.src}.json`)
  output.value = await response.json()
})
</script>
