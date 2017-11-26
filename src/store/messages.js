import * as types from './types'
import axios from 'axios'
import { toTime } from '../helpers/format'

const greeting = new Date().getHours() > 18 ? 'Boa noite'
               : new Date().getHours() > 12 ? 'Boa tarde'
                                            : 'Bom dia'

const state = {
  isWriting: false,
  data: {
    hash: '',
    state: null,
    question: ''
  },
  messages: [
    {
      sender: 'bot',
      text: `${greeting}. Como posso te ajudar, hoje?`,
      time: toTime(new Date())
    }
  ]
}

const getters = {
  [types.MESSAGES]: (state) => state.messages,
  [types.MESSAGES_DATA]: (state) => state.data,
  [types.MESSAGES_WRITING]: (state) => state.isWriting
}

const mutations = {
  [types.MESSAGES]: (state, payload) => {
    const message = {
      sender: payload.sender || 'user',
      text: payload.text,
      time: toTime(new Date())
    }

    state.messages = [ ...state.messages, message ]
  },
  [types.MESSAGES_DATA]: (state, payload) => {
    state.data = payload
  },
  [types.MESSAGES_WRITING]: (state, payload) => {
    state.isWriting = payload
  }
}

const actions = {
  [types.MESSAGES_SEND]: async ({ commit, getters }, payload) => {
    const message = { text: payload }
    const messages = getters[types.MESSAGES]
    const data = getters[types.MESSAGES_DATA]

    commit(types.MESSAGES, message)

    const { data: response } = await axios.post('http://192.168.1.172:8080/chat', {
      ...data,
      answer: payload
    })

    commit(types.MESSAGES_DATA, response)

    const time = response.question.split(' ').length * 50

    commit(types.MESSAGES_WRITING, true)
    setTimeout(() => {
      commit(types.MESSAGES, {
        text: response.question,
        sender: 'bot'
      })
      commit(types.MESSAGES_WRITING, false)
    }, time)
  }
}

export default { state, getters, mutations, actions }
