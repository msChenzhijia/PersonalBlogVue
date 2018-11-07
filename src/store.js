import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwtToke:""
  },
  mutations: {
      increment(state,n=""){
        state.jwtToke=n;
      }
  },
  actions: {

  }
})
