<template>
  <ContainerLayout>
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </ContainerLayout>
</template>

<script lang="ts">
export default {
  name: 'DefaultLayout',

  components: {
    ContainerLayout: () => import('@layouts/ContainerLayout'),
    TheHeader: () => import('@widgets/TheHeader'),
    TheFooter: () => import('@widgets/TheFooter'),
  },
}
</script>
