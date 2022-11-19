<template>
  <footer>
    <AppContainer> footer </AppContainer>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheFooter',

  components: {
    AppContainer: () => import('@/shared/layouts/AppContainer'),
  },
})
</script>

<style lang="scss" scoped></style>
