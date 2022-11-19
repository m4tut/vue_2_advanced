<template>
  <button class="btn" :disabled="isLoading" type="button" tabindex="0">
    <span :class="hideClass">
      <slot />
    </span>
    <span v-if="isLoading" class="btn__spin">
      <BaseSpin />
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseButton',
  components: {
    BaseSpin: () => import('@ui/BaseSpin'),
  },

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    hideClass(): string {
      return this.isLoading ? 'content-hide' : ''
    },
  },
})
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: $color-text-accent;
  border-radius: 6px;
  border: 2px solid transparent;

  font-weight: 700;
  font-size: rem(14px);
  line-height: rem(20px);
  color: $color-text-basic;

  transition: background-color 0.2s, border 0.2s;

  &:hover {
    background-color: #5440ac;
  }

  &:active {
    background-color: #423287;
    border-color: #d2ccec;
  }

  &:disabled {
    pointer-events: none;
    cursor: default;
    background-color: #d2ccec;
  }

  & .content-hide {
    color: transparent;
    background-color: transparent;
  }

  &__spin {
    position: absolute;
    color: $color-text-basic;
  }
}
</style>
