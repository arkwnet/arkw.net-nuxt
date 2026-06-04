<template>
  <div>
    <div class="header">
      <div class="wrapper">
        <div class="logo">
          <NuxtLink :to="localePath('/')">
            <div class="pc">
              <img src="../assets/img/logo.svg" />
            </div>
            <div class="mobile">
              <img src="../assets/img/logo2.svg" />
            </div>
          </NuxtLink>
        </div>
        <div class="icon">
          <div v-click-outside="hideLocaleMenu">
            <div class="locale" @click="onLocaleMenu">
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

<script setup>
const isLocaleMenu = ref(false)
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const onLocaleMenu = () => {
  isLocaleMenu.value = !isLocaleMenu.value
}

const showLocaleMenu = () => {
  isLocaleMenu.value = true
}

const hideLocaleMenu = () => {
  isLocaleMenu.value = false
}

const setLocale = async (lang) => {
  const path = switchLocalePath(lang)
  if (path) {
    await router.push(path)
  }
  hideLocaleMenu()
}
</script>
