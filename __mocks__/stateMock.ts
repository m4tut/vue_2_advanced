import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import * as rootStore from '@store'

const localVue = createLocalVue()

localVue.use(Vuex)

const stateMock = new Vuex.Store({
  ...rootStore,
})

export default stateMock
