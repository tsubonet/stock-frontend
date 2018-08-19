<template>
  <button class="button" @click="click"><slot></slot></button>
</template>

<script lang="ts">
export default {
  props: ['text'],
  methods: {
    click: function(){
  　　this.$emit('click');
  　},
  },
}
</script>

<style lang="scss" scoped>
.button {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(.375em - 1px);
  padding-left: .75em;
  padding-right: .75em;
  padding-top: calc(.375em - 1px);
  text-align: center;
  white-space: nowrap;
  border-width: 1px;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  position: relative;
  vertical-align: top;
  line-height: 1.5;
}
</style>
