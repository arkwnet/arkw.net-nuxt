<template>
  <div>
    <Header />
    <Navi />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header"
import Navi from "../components/Navi"
import Footer from "../components/Footer"
export default {
  components: {
    Header,
    Navi,
    Footer,
  },
}
</script>
