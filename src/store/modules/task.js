const state = {
  selectedList:[],
  sellerList:[],
}

const mutations = {
  setSelectedList(_state,payload){
    _state.selectedList = payload
  },
  setSellerList(_state,payload){
    _state.sellerList = payload
  },
}

const actions = {

}

const getters = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}