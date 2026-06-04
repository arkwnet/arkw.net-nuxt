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
