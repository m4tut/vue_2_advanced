<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseButton',
})
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
