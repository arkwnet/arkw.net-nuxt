<template>
  <div class="navi">
    <hooper
      :auto-play="true"
      :infinite-scroll="true"
      :keys-control="false"
      :play-speed="4000"
      :progress="true"
      :wheel-control="false"
    >
      <slide>
        <NaviImage href="https://arkw.work/doujin/" src="c103.webp" />
      </slide>
      <slide>
        <NaviImage
          href="https://arkw.net/products/pc_game/hiragana_erase/"
          src="hiragana_erase.webp"
        />
      </slide>
      <slide>
        <NaviImage
          href="https://arkw.net/products/win/LTTimer/"
          src="lt_timer.webp"
        />
      </slide>
      <slide>
        <NaviImage
          href="https://arkw.net/products/web/prohaya/"
          src="prohaya.webp"
        />
      </slide>
      <slide>
        <NaviImage
          href="https://arkw.net/products/pc_game/qubefall/"
          src="qubefall.webp"
        />
      </slide>
      <slide>
        <NaviImage src="arkw_lab.webp" />
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper"
import NaviImage from "./NaviImage.vue"
import "../assets/sass/hooper.scss"
export default {
  components: {
    Hooper,
    Slide,
    NaviImage,
  },
}
</script>
