import { firebaseMutations } from 'vuexfire'

const state = {
  id: null,
  data: {}
}
const mutations = {
  initCheck (state, id) {
    state.id = id
  },
  ...firebaseMutations
}

export default {
  state,
  mutations
}
