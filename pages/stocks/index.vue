<template>
  <div class="wrap">
    <Input 
      :submit="searchSubmit"
      :placeholder="placeholder"
    /> 
    <StockDetail
      :result="result"
      :addStock="addStock"
      :isShowButton="isShowButton"
    /> 
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import StockDetail from '../../components/organisms/stockDetail.vue'
import Input from '../../components/atoms/input.vue'

export default {
  data: function() {
    return {
      placeholder: 'ex: 3192',
      isShowButton: true,
    }
  },
  computed: {
    ...mapState('stocks', [
      'result',
    ]),
  },
  methods: {
    searchSubmit: function(event) {
      this.$store.dispatch('stocks/searchStock', event.target.value)
    },
    addStock: function(code, name) {
      this.$store.dispatch('stocks/addStock', { code, name })
    },
  },
  components: {
    Input,
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
