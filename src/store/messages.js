import * as types from './types'
import { formatTime } from '../helpers/format'

const state = {
  messages: [
    {
      sender: 'bot',
      text: 'Oi, tudo bom?',
      time: formatTime(new Date())
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
        text: payload,
        time: formatTime(new Date())
      }
    ]

    commit(types.MESSAGES, messages)
  }
}

export default { state, getters, mutations, actions }
