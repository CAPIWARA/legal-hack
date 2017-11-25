import * as types from './types'

const state = {
  messages: [
    {
      sender: 'bot',
      text: 'Oi, tudo bom?'
    }
  ]
}

const getters = {
  [types.MESSAGES]: (state) => state.messages
}

const mutations = {
  [types.MESSAGES]: (state, payload) => {
    state.messages = [ ...store.messages, payload ]
  }
}

const actions = {
  [types.MESSAGES_SEND]: ({ commit }, payload) => {
    const messages = [
      {
        sender: 'user',
        text: payload
      }
    ]

    commit(types.MESSAGES, messages)
  }
}

export default { state, getters, mutations, actions }
