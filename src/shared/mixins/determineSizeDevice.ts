import Vue from 'vue'

let resizeObserver: ResizeObserver | null = null

export default Vue.extend({
  data() {
    return {
      isDesktop: false, // 1366px <= device
      isLaptop: false, // 1024px <= device < 1366px
      isTablet: false, // 784px <= device < 1024px
      isPhone: false, // device < 784px
    }
  },

  computed: {
    widthSmallerThanLaptop(): boolean {
      return this.isTablet || this.isPhone
    },

    widerThanTablet(): boolean {
      return this.isLaptop || this.isDesktop || this.isTablet
    },
  },

  mounted() {
    resizeObserver = new ResizeObserver((entries) => {
      this.isDesktop = false
      this.isLaptop = false
      this.isTablet = false
      this.isPhone = false

      const entrie = entries[0]

      if (!entrie) {
        return
      }

      const width = entrie.contentRect.width

      if (width >= 1366) {
        this.isDesktop = true
        return
      }

      if (width > 1024 && width <= 1366) {
        this.isLaptop = true
        return
      }

      if (width > 768 && width <= 1024) {
        this.isTablet = true
        return
      }

      if (width < 784) {
        this.isPhone = true
      }
    })

    if (!resizeObserver) {
      return
    }

    resizeObserver.observe(document.documentElement)
  },

  destroyed() {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  },
})
