<template>
  <div>
    <div class="header">
      <div class="wrapper">
        <a href="/">
          <img src="~/assets/img/logo.svg" />
        </a>
        <div class="icon">
          <div class="language" @click="onLanguageMenu()">
            {{ $t("language") }}
          </div>
        </div>
      </div>
    </div>
    <ul class="menu language" v-if="isLanguageMenu">
      <li @click="setLanguage('ja')">日本語</li>
      <li @click="setLanguage('en')">English</li>
      <li @click="setLanguage('zh')">简体中文</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLanguageMenu: false,
    }
  },
  methods: {
    onLanguageMenu() {
      switch (this.isLanguageMenu) {
        case false:
          this.isLanguageMenu = true
          break
        case true:
          this.isLanguageMenu = false
          break
      }
    },
    setLanguage(lang) {
      this.$router.push(this.switchLocalePath(lang))
      this.isLanguageMenu = false
    },
  },
}
</script>
