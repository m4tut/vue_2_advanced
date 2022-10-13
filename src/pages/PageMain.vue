<template>
  <DefaultLayout> main </DefaultLayout>
</template>

<script lang="ts">
export default {
  name: 'PageMain',

  components: {
    DefaultLayout: () => import('@layouts/DefaultLayout'),
  },
}
</script>

<style lang="scss" scoped></style>
