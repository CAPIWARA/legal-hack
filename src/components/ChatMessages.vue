<template>
  <article class="chat-messages">
    <chat-message
      class="message"
      v-for="(message, index) in messages"
      :key="index"
      :text="message.text"
      :sender="message.sender"
    />
  </article>
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
