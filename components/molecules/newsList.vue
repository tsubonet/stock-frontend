<template>
  <ul>
    <li v-for="item in selected.news" :key="item.id">
      <a target="_blank" :href="item.href">{{ item.text }} : {{ item.date }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: ['selected'],
}
</script>

<style lang="scss" scoped>
li {
  margin-bottom: 10px;
  a {
    color: #333;
    font-size: 14px;
  }
}
</style>
