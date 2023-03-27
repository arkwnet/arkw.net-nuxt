<template>
  <div>
    <div class="header">
      <div class="wrapper">
        <a href="/">
          <img src="~/assets/img/logo.svg" />
        </a>
        <div class="icon">
          <div v-click-outside="hideLanguageMenu">
            <div class="language" @click="onLanguageMenu()">
              {{ $t("language") }}
            </div>
            <ul v-if="isLanguageMenu" class="menu language">
              <li @click="setLanguage('ja')">日本語</li>
              <li @click="setLanguage('en')">English</li>
              <li @click="setLanguage('zh')">简体中文</li>
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
      isLanguageMenu: false,
    }
  },
  methods: {
    onLanguageMenu() {
      switch (this.isLanguageMenu) {
        case false:
          this.showLanguageMenu()
          break
        case true:
          this.hideLanguageMenu()
          break
      }
    },
    showLanguageMenu() {
      this.isLanguageMenu = true
    },
    hideLanguageMenu() {
      this.isLanguageMenu = false
    },
    setLanguage(lang) {
      this.$router.push(this.switchLocalePath(lang))
      this.hideLanguageMenu()
    },
  },
}
</script>
