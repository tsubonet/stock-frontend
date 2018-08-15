<template>
  <div>
    <Header />
    <div class="container">   
      <Input /> 
      <div>
        <p>ip: {{ip}}</p>
      </div>
      <p><nuxt-link to="/users">About page</nuxt-link></p>
      <StockDetail /> 
    </div>
  </div>
</template>

<script lang="ts">
import Header from '../components/organisms/header.vue'
import StockDetail from '../components/organisms/stockDetail.vue'
import Input from '../components/atoms/input.vue'
export default {
  async asyncData({ app }) {
    const ip = await app.$axios.$get('http://icanhazip.com')
    return { ip }
  },
  mounted: function () {
    console.log("mounted");
    this.$nextTick(function () {
      // ビュー全体がレンダリングされた後にのみ実行されるコード
    })
  },
  components: {
    Header,
    Input,
    StockDetail,
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
