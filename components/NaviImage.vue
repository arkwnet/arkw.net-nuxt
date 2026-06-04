<template>
  <a v-if="props.href" :href="props.href">
    <div class="navi-image-with-link" :style="style" />
  </a>
  <div v-else :style="style" />
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    default: null,
  },
  src: {
    type: String,
    required: true,
  },
})

const style = computed(() => ({
  background: `url('/img/header/${props.src}') 0 0 no-repeat`,
  backgroundSize: "contain",
}))
</script>
