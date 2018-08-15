<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Hello World
      </h1>
      <div>
        <h1>Hello world!</h1>
        <p>ip: {{ip}}</p>
      </div>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
      <p><nuxt-link to="/users">About page</nuxt-link></p>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData({ app }) {
    const ip = await app.$axios.$get('http://icanhazip.com')
    return { ip }
  }
}
</script>