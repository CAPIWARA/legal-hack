import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import messages from './messages'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: { messages }
})

export default store
