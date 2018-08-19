export const state = () => ({
  list: [],
  result: {},
  selected: {},
})
  
export const mutations = {
  setResult(state, result) {
    state.result = result
  },
  setList(state, list) {
    state.list = list
  },
  addItem(state, item) {
    state.list = [item, ...state.list]
  },
  removeItem(state, item) {
    state.list.splice(state.list.indexOf(item), 1)
  },
  selectItem(state, item) {
    state.selected = item
  },
}

// export const getters = {
//   result: state => state.result,
//   list: state => state.list,
//   selected: state => state.selected,
// }

export const actions = {
  async fetchStock(context) {
    this.$axios.$get('http://localhost:3001/api/stocks/')
      .then((response) => {
        context.commit('setList', response)
      })
  },
  async searchStock(context, code) {
    this.$axios.$get('http://localhost:3001/api/stocks/search/?code=' + code)
      .then((response) => {
        context.commit('setResult', response)
      })
      .catch((err) => {
        context.commit('setResult', err.response.data)
      })
  },
  async addStock(context, data) {
    this.$axios.$post('http://localhost:3001/api/stocks/', data)
      .then((response) => {
        context.commit('addItem', response)
        context.commit('setResult', {})
      })
      .catch((err) => {
        console.error(err.response)
      })
  },
  async removeStock(context, stock) {
    this.$axios.$delete('http://localhost:3001/api/stocks/' + stock.id)
      .then((response) => {
        context.commit('removeItem', stock)
        this.$router.push('/stocks/')
      })
      .catch((err) => {
        console.error(err.response)
      })
  },
  async selectStock(context, stock) {
    this.$axios.$get('http://localhost:3001/api/stocks/' + stock.id)
      .then((response) => {
        context.commit('selectItem', response)
      })
      .catch((err) => {
        console.error(err.response)
      })
  },
} 