<template>
  <blockquote :class="classes">
    <p>{{ text }}</p>
  </blockquote>
</template>

<script>
  export default {
    props: {
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
      classes () {
        const classes = [ 'chat-message', '-' + this.sender ]
        return classes
      }
    }
  }
</script>
