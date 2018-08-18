<template>
  <div>
    <Header />
    <div class="container">   
      <Input 
        :submit="submit"
        :placeholder="placeholder"
      /> 
      <StockDetail
        :result="result"
       /> 
      <p><nuxt-link to="/users">users page</nuxt-link></p>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '../components/organisms/header.vue'
import StockDetail from '../components/organisms/stockDetail.vue'
import Input from '../components/atoms/input.vue'
export default {
  data: function() {
    return {
      placeholder: 'ex: 3192',
    }
  },
  mounted: function() {
    console.log("mounted");
  },
  computed: {
    result() {
      return this.$store.state.stocks.result
    }
  },
  methods: {
    submit: function(event) {
      this.$store.dispatch('stocks/requestFetchStock', event.target.value)
    }
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
