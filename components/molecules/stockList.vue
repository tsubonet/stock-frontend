<template>
  <nav>
    <ul>
      <li v-for="stock in list" :key="stock.id">
        <nuxt-link :to="'/stocks/'+stock.id">{{ stock.code }} : {{ stock.name }}</nuxt-link>
        <i class="fa fa-trash" @click="removeStock(stock)"></i>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  props: ['list', 'removeStock'],
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}
li {
  border-bottom: 1px solid #ccc;
  padding: 0;
  position: relative;
  a {
    display: block;
    padding: 16px 40px 16px 12px;
    color: #4d4d4d;
    font-weight: bold;
    text-decoration: none;
    line-height: 1.3;
    &.nuxt-link-active {
      background: #cccccc;
    }
  }
  .fa-trash {
    position: absolute;
    color: #bbb;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
