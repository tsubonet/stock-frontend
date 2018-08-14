<template>
  <section class="container">
    <div>
      <h1>usersのindexページです。</h1>
      <p>count={{count}}</p>
      <button @click="addCount">+</button>
      <button @click="reduceCount">-</button>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    count () { return this.$store.state.counter.count }
  },
  methods: {
    addCount (e) {
      this.$store.commit('counter/add')
    },
    reduceCount (e) {
      this.$store.commit('counter/reduce')
    }
  }
}
</script>