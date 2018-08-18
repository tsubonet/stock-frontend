<template>
  <div>
    <Header />
    <div class="container">
      <aside>
        <StockList
          :list="list"
          :removeStock="removeStock"
        />
      </aside>
      <main>
        <Input 
          :submit="searchSubmit"
          :placeholder="placeholder"
        /> 
        <StockDetail
          :result="result"
          :addStock="addStock"
        /> 
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '../../components/organisms/header.vue'
import StockDetail from '../../components/organisms/stockDetail.vue'
import StockList from '../../components/molecules/stockList.vue'
import Input from '../../components/atoms/input.vue'

export default {
  data: function() {
    return {
      placeholder: 'ex: 3192',
    }
  },
  mounted: function() {
    this.fetchStock();
  },
  computed: {
    result() {
      return this.$store.state.stocks.result
    },
    list() {
      return this.$store.state.stocks.list
    }
  },
  methods: {
    fetchStock: function() {
      this.$store.dispatch('stocks/fetchStock');
    },
    searchSubmit: function(event) {
      this.$store.dispatch('stocks/searchStock', event.target.value)
    },
    addStock: function(code, name) {
      this.$store.dispatch('stocks/addStock', { code, name })
    },
    removeStock: function(stock) {
      this.$store.dispatch('stocks/removeStock', stock)
    },
  },
  components: {
    Header,
    Input,
    StockDetail,
    StockList,
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: calc(100vh - 60px);
}
main {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 20px;
}
aside {
  width: 260px;
  background: #f2f2f2;
  border-right: 1px solid #ccc;
  overflow: scroll;
}
</style>
