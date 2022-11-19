<template>
  <div>
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
export default {
  name: 'DefaultLayout',

  components: {
    TheHeader: () => import('@widgets/TheHeader'),
    TheFooter: () => import('@widgets/TheFooter'),
  },
}
</script>
