import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchId: null,
    stopSearch: false,
    tickets: []
  },
  actions,
  mutations,
  getters
})
