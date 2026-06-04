export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", {
    mounted(el, binding) {
      const handler = (event) => {
        if (!el.contains(event.target)) {
          binding.value(event)
        }
      }
      el.__clickOutsideHandler__ = handler
      if (import.meta.client) {
        document.addEventListener("click", handler)
      }
    },
    beforeUnmount(el) {
      if (import.meta.client) {
        document.removeEventListener("click", el.__clickOutsideHandler__)
      }
    },
    getSSRProps() {
      return {}
    },
  })
})
