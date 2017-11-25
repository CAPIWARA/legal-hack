<template>
  <form class="chat-sender" @submit.prevent="submit()">
    <textarea class="field" v-model="text"></textarea>
    <button type="submit" class="button">Enviar</button>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        text: ''
      }
    },
    methods: {
      submit () {
        const isValid = this.text.trim().length > 0
        if (!isValid)
          return
        this.$emit('send', this.text)
      }
    }
  }
</script>
