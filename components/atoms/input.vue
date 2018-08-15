<template>
  <div class="searchWrap">
    <input placeholder="input stock's code" />
    <i class="fas fa-search"></i>
  </div>
</template>
<script lang="ts">
export default {
}
</script>
<style lang="scss" scoped>
.searchWrap {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  input {
    width: 100%;  
    padding: 20px;
    font-size: 20px;
    border-radius: 3px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    box-shadow: 0px 3px 3px rgba(0,0,0,.1);
  }
  i {
    position: absolute;
    right: 20px;
    top: 50%;
    font-size: 24px;
    transform: translateY(-50%);
    color: #ccc;
  }
}

</style>
