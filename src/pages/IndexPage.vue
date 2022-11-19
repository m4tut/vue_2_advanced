<template>
  <DefaultLayout>
    <AppContainer> main </AppContainer>
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',

  components: {
    DefaultLayout: () => import('@layouts/DefaultLayout'),
    AppContainer: () => import('@/shared/layouts/AppContainer'),
  },
})
</script>

<style lang="scss" scoped></style>
