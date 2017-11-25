<template>
  <chat-container />
</template>

<script>
  import ChatContainer from './containers/ChatContainer'

  export default {
    components: { ChatContainer }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,300,300i');

  /**
   * Reset
   */
  html,
  body { height: 100%; }

  body {
    margin: 0;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
  }

  input:focus, textarea:focus, button:focus {
    outline: none;
  }
</style>
