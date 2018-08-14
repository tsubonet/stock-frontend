<template>
  <div>
    <h1>Hello world!</h1>
    <p>ip: {{ip}}</p>
  </div>
</template>
<script>
export default {
  async asyncData({ app }) {
    const ip = await app.$axios.$get('http://icanhazip.com')
    return { ip }
  }
}
</script>