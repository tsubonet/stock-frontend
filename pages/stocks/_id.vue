<template>
  <div class="wrap">
    <div class="chart">
      <StockDetail
        :result="selected"
      /> 
    </div>
    <div class="news">
      <NewsList
        :selected="selected"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import StockDetail from '../../components/organisms/stockDetail.vue'
import NewsList from '../../components/molecules/newsList.vue'

export default {
  mounted: function() {
    this.selectStock(this.$route.params);
  },
  computed: {
    ...mapState('stocks', [
      'selected',
    ]),
  },
  methods: {
    selectStock: function(params) {
      this.$store.dispatch('stocks/selectStock', params)
    },
  },
  components: {
    StockDetail,
    NewsList,
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  display: flex;
  height: 100%;
  box-sizing: border-box;
}
.chart {
  box-sizing: border-box;
  width: 50%;
  padding: 20px;
  border-right: 1px solid #ccc;
}
.news {
  box-sizing: border-box;
  width: 50%;
  padding: 20px;
  text-align: left;
}
</style>
