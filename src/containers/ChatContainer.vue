<template>
  <main class="chat-container">
    <chat-messages :messages="messages" />
    <chat-sender @send="(text) => send(text)" />
  </main>
</template>

<script>
  import * as types from '../store/types'
  import { mapGetters, mapActions } from 'vuex'
  import ChatMessages from '../components/ChatMessages'
  import ChatSender from '../components/ChatSender'

  export default {
    components: { ChatMessages, ChatSender },
    computed: mapGetters({
      messages: types.MESSAGES
    }),
    methods: mapActions({
      send: types.MESSAGES_SEND
    })
  }
</script>

