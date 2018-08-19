<template>
  <transition name="slide-fade" mode="out-in">
    <div class="errorField" v-if="result.error">
      <p>{{result.error}}</p>
    </div>
    <div class="resultField" v-else-if="result.code">
      <div class="detailBox">
        <div class="company">
          <p class="code">{{result.code}}</p>
          <p class="name">{{result.name}}</p>
        </div>
        <p class="price">{{result.price}}</p>
        <p class="change">前日比: <span>{{result.change}}</span></p>
      </div>
      <div class="chartImage"><img v-bind:src="result.chartUrl"></div>
      <div class="buttonList" v-show="isShowButton">
        <Button @click="addStock(result.code, result.name)">追加する</Button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Button from '../atoms/button.vue'
export default {
  props: ['result', 'addStock', 'isShowButton'],
  components: {
    Button,
  }
}
</script>

<style lang="scss" scoped>
.resultField {
  .detailBox {
    max-width: 512px;
    margin: 40px auto 10px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    .company {
      width: 30%;
      .code {
        margin-bottom: 10px;
        font-size: 12px; 
      }
      .name {
        margin-top: 0;
        font-weight: bold;
        font-size: 22px; 
      }
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
        padding: 4px 8px;
        color: #fff;
        background: rgb(165, 5, 66);
      }
    }
  }
  .chartImage {
    img {
      width: 100%;
    }
  }
  .buttonList {
    margin-top: 20px;
    text-align: right;
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>
