<template>
  <main class="chat-container">
    <chat-messages :messages="messages" />
    <chat-sender @send="text => send(text)" />
  </main>
</template>

<script>
  import ChatMessages from '../components/ChatMessages'
  import ChatSender from '../components/ChatSender'

  export default {
    components: { ChatMessages, ChatSender },
    data () {
      return {
        messages: [
          {
            text: 'Olá',
            sender: 'bot'
          }
        ]
      }
    },
    methods: {
      send (text) {
        this.messages = [ ...this.messages, { text, sender: 'user' } ]
      }
    }
  }
</script>

