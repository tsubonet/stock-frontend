export const state = () => ({
  query: '',
  result: {}
})
  
export const mutations = {
  setResult (state, result) {
    state.result = result
  },
}

export const actions = {
  async requestFetchStock(context, code) {
    this.$axios.$get('http://localhost:3001/api/stocks/' + code)
      .then((response) => {
        context.commit('setResult', response)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}