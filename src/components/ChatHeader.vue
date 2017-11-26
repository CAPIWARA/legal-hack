<template>
  <header class="chat-header">
    <figure class="logo-container">
      <img src="/logo.png" alt="Legal Chat" class="image">
    </figure>
  </header>
</template>

<style>
  .chat-header {
    height: 100px;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 3px 6px rgba(0,0,0, .15);
  }

  .logo-container {
    height: 100px;
    margin: 0;
    padding: 0 0 0 20px;

    & > .image {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>

