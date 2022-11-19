import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { IRootState } from '@interfaces/store/root'

Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

const store: StoreOptions<IRootState> = {
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules,
}

export default new Vuex.Store<IRootState>(store)
