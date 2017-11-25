import Vue from 'vue'
import App from './App'
import store from './store'

const render = (λ) => λ(App)

const app = new Vue({
  el: '#app',
  store,
  render
})
