<template>
  <a :href="href" target="_blank" :title="alt">
    <div class="box">
      <div class="image">
        <img :src="path" :alt="alt" />
      </div>
      <div class="text">{{ name }}</div>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  href: { type: String, required: true },
  src: { type: String, required: true },
  name: { type: String, required: true },
  alt: { type: String, default: "" },
})
const images = import.meta.glob("../../assets/img/social/*", {
  eager: true,
  import: "default",
})
const path = computed(() => {
  return images[`../../assets/img/social/${props.src}`]
})
</script>
