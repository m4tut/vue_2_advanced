<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
}
</script>

<style lang="scss" scoped>
.btn {
  font-family: inherit;

  color: $color-text-default;
  background-color: $color-background-default;

  border: none;
  outline: none;
  cursor: pointer;
}
</style>
