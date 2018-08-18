<template>
  <div v-if="result.error">
    <p>{{result.error}}</p>
  </div>
  <div v-else-if="result.company">
    <div class="detailBox">
      <p class="companyName">{{result.company}}</p>
      <p class="price">{{result.price}}</p>
      <p class="change">前日比: <span>{{result.change}}</span></p>
    </div>
    <div><img v-bind:src="result.chartUrl"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['result'],
}
</script>

<style lang="scss" scoped>
.detailBox {
  max-width: 512px;
  margin: 40px auto 10px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  .companyName {
    font-weight: bold;
    font-size: 16px;
    width: 30%;
  }
  .price {
    font-size: 40px;
    font-weight: bold;
    margin: 0 20px;
    width: 30%;
  }
  .change {
    width: 40%;
    font-size: 12px;
    span {
      font-weight: bold;
      padding: 4px;
      
      color: #fff;
      background: rgb(165, 5, 66);
    }
  }
}
</style>
