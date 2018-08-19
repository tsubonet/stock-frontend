<template>
  <div class="outer">
    <input 
      type="text"
      class="inputField"
      :placeholder="placeholder"
      @keyup.enter="submit"
    />
    <i class="fas fa-search"></i>
  </div>
</template>

<script lang="ts">
export default {
  props: ['submit', 'placeholder'],
}
</script>

<style lang="scss" scoped>
.outer {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}
.inputField {
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
</style>
