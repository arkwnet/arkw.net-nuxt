<template>
  <div class="navi">
    <div class="slider">
      <NaviImage image="dummy_red.png" />
      <NaviImage
        url="https://arkw.net/products/pc_game/qubefall"
        image="dummy_blue.png"
      />
    </div>
  </div>
</template>

<script>
import NaviImage from "./NaviImage"
export default {
  components: {
    NaviImage,
  },
}
</script>
