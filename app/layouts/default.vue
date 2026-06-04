<template>
  <div>
    <Header />
    <Navi v-if="baseRouteName === 'index'" />
    <div v-if="baseRouteName === 'index'" class="main">
      <div class="right">
        <slot />
      </div>
      <Sidebar />
    </div>
    <div v-else class="main sub">
      <div class="right">
        <slot />
      </div>
      <Sidebar />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../../components/Header.vue"
import Navi from "../../components/Navi.vue"
import Sidebar from "../../components/Sidebar.vue"
import Footer from "../../components/Footer.vue"
const route = useRoute()
const routeBaseName = useRouteBaseName()
const baseRouteName = computed(() => routeBaseName(route))
</script>
