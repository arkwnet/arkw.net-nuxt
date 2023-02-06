<template>
  <div
    v-if="href != null"
    class="navi-image-with-link"
    :style="style"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  ></div>
  <div v-else :style="style"></div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      style:
        "background: url('/img/header/" +
        this.src +
        "') 0 0 no-repeat; background-size: contain;",
      x: null,
      y: null,
    }
  },
  methods: {
    onMouseDown(e) {
      this.x = e.screenX
      this.y = e.screenY
    },
    onMouseUp(e) {
      if (
        this.x != null &&
        this.x === e.screenX &&
        this.y != null &&
        this.y === e.screenY
      ) {
        window.location.assign(this.href)
      }
      this.x = null
      this.y = null
    },
  },
}
</script>
