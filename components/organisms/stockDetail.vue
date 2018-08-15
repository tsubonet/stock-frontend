<template>
  <div v-if="this.$store.state.stocks.result.chartUrl">
    <div>
      <p>{{this.$store.state.stocks.result.company}}</p>
      <p>{{this.$store.state.stocks.result.price}}</p>
      <p>{{this.$store.state.stocks.result.change}}</p>

    </div>
    <div><img v-bind:src="this.$store.state.stocks.result.chartUrl"></div>
  </div>
</template>
<script lang="ts">
export default {
}
</script>
<style lang="scss" scoped>
</style>
