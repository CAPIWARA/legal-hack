import Vue from 'vue'
import App from './App'

const render = (λ) => λ(App)

const app = new Vue({
  el: '#app',
  render
})
