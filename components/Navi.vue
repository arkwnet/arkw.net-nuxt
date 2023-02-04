<template>
  <div class="navi">
    <hooper :progress="true" :auto-play="true" :play-speed="4000">
      <slide><NaviImage src="arkw_lab.png" /></slide>
      <slide><NaviImage src="hiragana_erase.png" /></slide>
      <slide><NaviImage src="qubefall.png" /></slide>
      <slide><NaviImage src="prohaya.png" /></slide>
      <!--
      <slide>
        <NaviImage
          href="https://arkw.net/products/pc_game/hiragana_erase/"
          src="hiragana_erase.png"
        />
      </slide>
      <slide>
        <NaviImage
          href="https://arkw.net/products/pc_game/qubefall/"
          src="qubefall.png"
        />
      </slide>
      <slide>
        <NaviImage
          href="https://arkw.net/products/web/prohaya/"
          src="prohaya.png"
        />
      </slide>
      -->
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper"
import NaviImage from "./NaviImage.vue"
import "../assets/css/hooper.css"
export default {
  components: {
    Hooper,
    Slide,
    NaviImage,
  },
}
</script>
