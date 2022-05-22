<template>
  <div class="contact-section">
    <h3>Say Hi</h3>
    <form action="https://formsubmit.co/jpecheverryp@gmail.com" method="POST">
      <div class="input-control">
        <label for="username">Name*</label>
        <input type="text" name="username" id="username" required>
      </div>
      <div class="input-control">
        <label for="email">Email*</label>
        <input type="email" name="email" id="email" required>
      </div>
      <div class="input-control">
        <label for="message">Message*</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </div>
      <input class="send-msg" type="submit" value="Send Message">
    </form>
  </div>
  
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  label {
    display: block;
  }
  .contact-section {
    text-align: center;
  }
  form {
    width: fit-content;
    margin: 0 auto 6rem;
  }
  .input-control {
    text-align: left;
  }
  h3 {
    color: #3CAF81;
  }
  input {
    width: 100%;
    padding: .5rem .75rem;
  }
  textarea {
    resize: vertical;
  }
  .send-msg {
    background-color: #3CAF81;
    border: none;
    border-radius: 5px;

  }
</style>