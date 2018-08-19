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
        <nuxt-child :key="$route.params.id"/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import Header from '../components/organisms/header.vue'
import StockList from '../components/molecules/stockList.vue'

export default {
  mounted: function() {
    this.fetchStock();
  },
  computed: {
    ...mapState('stocks', [
      'list',
    ]),
  },
  methods: {
    fetchStock: function() {
      this.$store.dispatch('stocks/fetchStock');
    },
    removeStock: function(stock) {
      this.$store.dispatch('stocks/removeStock', stock)
    },
  },
  components: {
    Header,
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
  width: calc(100% - 260px);
}
aside {
  width: 260px;
  background: #f2f2f2;
  border-right: 1px solid #ccc;
  overflow: scroll;
}
</style>
