<template>
  <header>
    <h1>
      <nuxt-link :to="'/stocks'"><i class="fas fa-chart-line"></i> 株価を取得するよ</nuxt-link>
    </h1>
  </header>
</template>

<script lang="ts">
export default {
}
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  h1 {
    margin: 0;
    padding: 20px;
    font-size: 16px;
    a {
      text-decoration: none;
      color: #333;
    }
  }
}
</style>
