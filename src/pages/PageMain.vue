<template>
  <DefaultLayout> main </DefaultLayout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageMain',

  components: {
    DefaultLayout: () => import('@layouts/DefaultLayout'),
  },
})
</script>

<style lang="scss" scoped></style>
