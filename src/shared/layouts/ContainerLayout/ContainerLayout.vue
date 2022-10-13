<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContainerLayout',
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
