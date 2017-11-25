<template>
  <blockquote :class="classes">
    <span class="time">{{ time }}</span>
    <p class="text" v-html="html"></p>
  </blockquote>
</template>

<script>
  export default {
    props: {
      time: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      sender: {
        type: String,
        required: true,
        validator: (sender) => {
          const isValid = ['bot', 'user'].includes(sender)
          return isValid
        }
      }
    },
    computed: {
      html () {
        const html = this.text.replace(/\n\r?/g, '<br>')
        return html
      },
      classes () {
        const classes = [ 'chat-message', '-' + this.sender ]
        return classes
      }
    }
  }
</script>

<style>
  .chat-message {
    box-sizing: border-box;
    position: relative;
    background-color: #bbb;
    margin: 0 0 18px 0;
    padding: 20px 20px 30px;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0, .15);

    &.-user {
      background-color: #2ecc71;
      background-image: linear-gradient(#2ecc71, color(#2ecc71, l(-10%)));
    }

    & > .text,
    & > .time {
      font-size: 16px;
      margin: 0;
      color: #fff;
    }

    & > .time {
      position: absolute;
      right: 20px;
      bottom: 10px;
      font-size: 12px;
    }
  }
</style>
