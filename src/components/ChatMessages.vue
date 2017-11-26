<template>
  <transition-group class="chat-messages" name="pop" tag="article">
    <chat-message
      class="message"
      v-for="(message, index) in messages"
      :key="index"
      :time="message.time"
      :text="message.text"
      :sender="message.sender"
    />
  </transition-group>
</template>

<script>
  import ChatMessage from './ChatMessage'

  export default {
    components: { ChatMessage },
    props: {
      messages: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>
  .chat-messages {
    overflow: auto;
    max-height: calc(100% - 200px);
    padding: 20px;
  }

  .pop-enter-active,
  .pop-leave-active { transition: all .2s cubic-bezier(.25, .8, .25, 1); }

  .pop-enter,
  .pop-leave-to {
    transform: translate(-50%, -15px) scale(.6);
    opacity: 0;
  }
</style>
