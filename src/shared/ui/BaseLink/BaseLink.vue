<template>
  <RouterLink class="link" :to="href"> <slot /> </RouterLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseLink',

  props: {
    href: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.link {
  transition: color 0.2s;

  &:hover {
  }
}
</style>
