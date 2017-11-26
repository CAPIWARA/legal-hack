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
    margin: 0 0 18px 0;
    padding: 20px 20px 30px;
    border-radius: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0, .15);

    &.-bot {
      border-radius: 20px 20px 0 20px;
      background-color: #ac2527;
      background-image: linear-gradient(#ac2527, #fd5954);
    }

    &.-user {
      border-radius: 0 20px 20px 20px;
      background-color: #bbb;
    }

    &.-bot::after,
    &.-user::before {
      position: absolute;
      border-style: solid;
      width: 0;
      height: 0;
      content: '';
    }

    &.-bot::after {
      right: -9px;
      top: calc(100% - 19.6px);
      border-width: 10px 19px 10px 0;
      border-color: #0000 #fd5954 #0000 #0000;
      transform: rotate(90deg);
    }

    &.-user::before {
      left: -12px;
      top: -6px;
      border-width: 10px 19px 10px 0;
      border-color: transparent #bbb transparent transparent;
      transform: rotate(29deg);
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
