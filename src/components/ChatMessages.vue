<template>
  <div class="chat-messages">
    <transition-group
      class="chat-messages"
      name="pop"
      tag="article"
      ref="container"
    >
      <chat-message
        class="message"
        v-for="(message, index) in messages"
        :key="index"
        :time="message.time"
        :text="message.text"
        :sender="message.sender"
      />
    </transition-group>
    <figure v-if="isWriting" class="chat-loading">
      <span class="bullet"></span>
      <span class="bullet"></span>
      <span class="bullet"></span>
    </figure>
  </div>
</template>

<script>
  import ChatMessage from './ChatMessage'

  export default {
    components: { ChatMessage },
    props: {
      isWriting: Boolean,
      messages: {
        type: Array,
        required: true
      }
    },
    watch: {
      messages () {
        setTimeout(() => {
          const container = this.$refs.container.$el
          container.scrollIntoView({ behavior: 'smooth', block: 'end' })
        }, 250)
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

  .chat-loading {
    position: absolute;
    bottom: 110px;
    left: 50%;
    margin-right: auto;
    margin-left: auto;
    font-size: 0;
    text-align: center;
    transform: translateX(-50%);

    & > .bullet {
      display: inline-block;
      margin: 0 5px;
      width: 18px;
      height: 18px;
      background-color: #333;
      border-radius: 100%;
      animation: bounce 1.4s infinite ease-in-out both;
    }

    & > .bullet:nth-child(1) { animation-delay: -0.32s; }
    & > .bullet:nth-child(2) { animation-delay: -0.16s; }
  }

  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    } 40% {
      transform: scale(1);
    }
  }

  .pop-enter-active,
  .pop-leave-active { transition: all .2s cubic-bezier(.25, .8, .25, 1); }

  .pop-enter,
  .pop-leave-to {
    transform: translate(-50%, -15px) scale(.6);
    opacity: 0;
  }
</style>
