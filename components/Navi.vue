<template>
  <div class="navi">
    <div class="slider">
      <NaviImage src="arkw_lab.png" />
      <NaviImage
        href="https://arkw.net/products/pc_game/hiragana_erase/"
        src="hiragana_erase.png"
      />
      <NaviImage
        href="https://arkw.net/products/pc_game/qubefall/"
        src="qubefall.png"
      />
      <NaviImage
        href="https://arkw.net/products/web/prohaya/"
        src="prohaya.png"
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
