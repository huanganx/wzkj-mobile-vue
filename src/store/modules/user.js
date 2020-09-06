const state = {
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
  userList: []
}

const mutations = {
  // setUserList(_state, payload) {
  //   _state.userList = payload
  // },
  setAuthorToken(_state, payload) {
    _state.Authorization = payload.Authorization;
    localStorage.setItem('Authorization', payload.Authorization);
  }
}

const actions = {
  // async getUserList({ commit }) {
  //   const result = await api.user.list()
  //   commit('setUserList', result)
  // }
}

const getters = {
  // getUserList: state => {
  //   return state.userList
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}