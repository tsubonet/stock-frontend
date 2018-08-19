<template>
  <div class="wrap">
    <StockDetail
      :result="selected"
    /> 
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import StockDetail from '../../components/organisms/stockDetail.vue'

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
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 512px;
  margin: 0 auto;
  padding: 20px 20px;
}
</style>
