<template>
  <div>
    <Header />
    <Navi v-if="getRouteBaseName() === 'index'" />
    <div v-if="getRouteBaseName() === 'index'" class="main">
      <div class="right">
        <nuxt />
      </div>
      <Sidebar />
    </div>
    <div v-else class="main sub">
      <div class="right">
        <nuxt />
      </div>
      <Sidebar />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header"
import Navi from "../components/Navi"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
export default {
  components: {
    Header,
    Navi,
    Sidebar,
    Footer,
  },
}
</script>
