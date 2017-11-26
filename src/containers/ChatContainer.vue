<template>
  <main class="chat-container">
    <chat-header />
    <chat-messages :messages="messages" :isWriting="isWriting" />
    <chat-sender class="sender" @send="(text) => send(text)" />
  </main>
</template>

<script>
  import * as types from '../store/types'
  import { mapGetters, mapActions } from 'vuex'
  import ChatMessages from '../components/ChatMessages'
  import ChatSender from '../components/ChatSender'
  import ChatHeader from '../components/ChatHeader'

  export default {
    components: { ChatMessages, ChatSender, ChatHeader },
    computed: mapGetters({
      messages: types.MESSAGES,
      isWriting: types.MESSAGES_WRITING
    }),
    methods: mapActions({
      send: types.MESSAGES_SEND
    })
  }
</script>

<style>
  .chat-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & > .sender { margin-top: auto; }

    @media screen and (min-width: 769px) {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 750px;
      height: 90%;
      border: 1px solid #ddd;
      transform: translate(-50%, -50%);
      box-shadow: 0 3px 6px rgba(0,0,0, .15);
    }

    @media screen and (min-width: 1025px) {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 750px;
      height: 90%;
      border: 1px solid #ddd;
      transform: translate(-50%, -50%);
      box-shadow: 0 3px 6px rgba(0,0,0, .15);
    }
  }
</style>
