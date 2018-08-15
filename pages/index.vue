<template>
  <div>
    <Header />
    <div class="container">   
      <Input /> 
      <div>
        <p>ip: {{ip}}</p>
      </div>
      <p><nuxt-link to="/users">About page</nuxt-link></p>
      
    </div>
  </div>
</template>

<script lang="ts">
import Header from '../components/organisms/header.vue'
import Input from '../components/atoms/input.vue'
export default {
  async asyncData({ app }) {
    const ip = await app.$axios.$get('http://icanhazip.com')
    return { ip }
  },
  components: {
    Header,
    Input,
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 20px;
}
</style>
