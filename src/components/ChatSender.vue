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
        this.text = ''
      }
    }
  }
</script>

<style>
  .chat-sender {
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    background-color: #fff;
    border-top: 1px solid #ddd;

    & > .field {
      box-sizing: border-box;
      flex: 1;
      border: 0;
      height: 60px;
      padding: 10px;
      border-radius: 15px 0 0 15px;
      font-size: 14px;
      background-color: #eee;
      resize: none;
      transition: background-color .3s ease;

      &:focus {
        background-color: color(#eee, l(100%));
      }
    }

    & > .button {
      width: 120px;
      height: 60px;
      border: 0;
      border-radius: 0 15px 15px 0;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 300;
      color: #fff;
      background-color: #ac2527;
      background-image: linear-gradient(#ac2527, #fd5954);
      transition: transform .3s ease;
      cursor: pointer;

      &:hover {
        transform: scale(.95) translateX(-5%);
      }
    }
  }
</style>
