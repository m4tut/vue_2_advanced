<template>
  <ContainerLayout>
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </ContainerLayout>
</template>

<script>
export default {
  name: 'DefaultLayout',

  components: {
    ContainerLayout: () => import('@layouts/ContainerLayout'),
    TheHeader: () => import('@widgets/TheHeader'),
    TheFooter: () => import('@widgets/TheFooter'),
  },
}
</script>
