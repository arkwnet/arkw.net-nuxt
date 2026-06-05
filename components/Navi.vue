<template>
  <div class="navi">
    <swiper-container ref="containerRef" :init="false">
      <swiper-slide>
        <NaviImage href="https://arkw.work/doujin/" src="c108.webp" />
      </swiper-slide>
      <swiper-slide>
        <NaviImage src="arkw_lab.webp" />
      </swiper-slide>
      <swiper-slide>
        <NaviImage
          href="https://arkw.net/products/pc_game/more_subway_nagoya/"
          src="more_subway_nagoya.webp"
        />
      </swiper-slide>
      <swiper-slide>
        <NaviImage
          href="https://arkw.net/products/pc_game/hakotan/"
          src="hakotan.webp"
        />
      </swiper-slide>
      <swiper-slide>
        <NaviImage
          href="https://arkw.net/products/pc_game/hiragana_erase/"
          src="hiragana_erase.webp"
        />
      </swiper-slide>
      <swiper-slide>
        <NaviImage
          href="https://play.google.com/store/apps/details?id=jp.arkw.swarmskytox"
          src="swarmskytox.webp"
        />
      </swiper-slide>
      <swiper-slide>
        <NaviImage
          href="https://arkw.net/products/web/prohaya/"
          src="prohaya.webp"
        />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import NaviImage from "./NaviImage.vue"
import "../assets/sass/hooper.scss"
const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 4000,
  },
})
onMounted(() => {
  console.log(swiper.instance)
})
</script>
