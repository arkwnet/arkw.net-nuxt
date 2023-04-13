<template>
  <div>
    <div class="header">
      <div class="wrapper">
        <div class="logo">
          <nuxt-link :to="localePath('/')">
            <div class="pc"><img src="~/assets/img/logo.svg" /></div>
            <div class="mobile"><img src="~/assets/img/logo2.svg" /></div>
          </nuxt-link>
        </div>
        <div class="icon">
          <div v-click-outside="hideLocaleMenu">
            <div class="locale" @click="onLocaleMenu()">
              {{ $t("locale") }}
            </div>
            <ul v-if="isLocaleMenu" class="menu locale">
              <li @click="setLocale('ja')">日本語</li>
              <li @click="setLocale('en')">English</li>
              <li @click="setLocale('zh')">简体中文</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside"
export default {
  directives: {
    ClickOutside,
  },
  data() {
    return {
      isLocaleMenu: false,
    }
  },
  methods: {
    onLocaleMenu() {
      switch (this.isLocaleMenu) {
        case false:
          this.showLocaleMenu()
          break
        case true:
          this.hideLocaleMenu()
          break
      }
    },
    showLocaleMenu() {
      this.isLocaleMenu = true
    },
    hideLocaleMenu() {
      this.isLocaleMenu = false
    },
    setLocale(lang) {
      this.$router.push(this.switchLocalePath(lang))
      this.hideLocaleMenu()
    },
  },
}
</script>
