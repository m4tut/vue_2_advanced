<template>
  <AppContainer>
    <header>header</header>
  </AppContainer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheHeader',

  components: {
    AppContainer: () => import('@/shared/layouts/AppContainer'),
  },
})
</script>

<style lang="scss" scoped></style>
