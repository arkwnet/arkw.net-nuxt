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
        <NaviImage href="https://arkw.work/doujin/" src="omobaza.webp" />
      </slide>
      <slide>
        <NaviImage src="arkw_lab.webp" />
      </slide>
      <slide>
        <NaviImage
          href="https://arkw.net/products/pc_game/more_subway_nagoya/"
          src="more_subway_nagoya.webp"
        />
      </slide>
      <slide>
        <NaviImage
          href="https://arkw.net/products/pc_game/train_driver_entetsu/"
          src="train_driver_entetsu.webp"
        />
      </slide>
      <slide>
        <NaviImage
          href="https://arkw.net/products/pc_game/hakotan/"
          src="hakotan.webp"
        />
      </slide>
      <slide>
        <NaviImage
          href="https://arkw.net/products/pc_game/hiragana_erase/"
          src="hiragana_erase.webp"
        />
      </slide>
      <slide>
        <NaviImage
          href="https://play.google.com/store/apps/details?id=jp.arkw.swarmskytox"
          src="swarmskytox.webp"
        />
      </slide>
      <slide>
        <NaviImage
          href="https://arkw.net/products/web/prohaya/"
          src="prohaya.webp"
        />
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
