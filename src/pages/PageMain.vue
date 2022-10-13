<template>
  <DefaultLayout> main </DefaultLayout>
</template>

<script>
export default {
  name: 'PageMain',

  components: {
    DefaultLayout: () => import('@layouts/DefaultLayout'),
  },
}
</script>

<style lang="scss" scoped></style>
