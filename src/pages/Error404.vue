<template>
  <main class="main">
    <h1 class="title">
      Error 404
    </h1>
    <router-link
      class="link"
      to="/"
    >
      Go to Home
    </router-link>
  </main>
</template>

<script>
export default {
  name: 'Error404',
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .title {
    font-size: rem(32px);
    text-transform: uppercase;
  }

  .link {
    font-size: rem(20px);
    transition: color 0.3s;
    &:hover {
      color: $color-text-accent;
    }
  }
}
</style>
