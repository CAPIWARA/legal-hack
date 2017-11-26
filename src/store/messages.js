import * as types from './types'
import axios from 'axios'
import { toTime } from '../helpers/format'

const state = {
  messages: [
    {
      sender: 'bot',
      text: 'Oi, tudo bom?',
      time: toTime(new Date())
    }
  ]
}

const getters = {
  [types.MESSAGES]: (state) => state.messages
}

const mutations = {
  [types.MESSAGES]: (state, payload) => {
    const message = {
      sender: payload.sender || 'user',
      text: payload.text,
      time: toTime(new Date())
    }

    state.messages = [ ...state.messages, message ]
  }
}

const actions = {
  [types.MESSAGES_SEND]: async ({ commit }, payload) => {
    const message = { text: payload }

    commit(types.MESSAGES, message)

    const { data: response } = await axios.post('http://192.168.1.172:8080/chat', {
      question: '',
      answer: payload
    })

    commit(types.MESSAGES, {
      text: response.question,
      sender: 'bot'
    })
  }
}

export default { state, getters, mutations, actions }
