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
      <input type="submit" value="Send Message">
    </form>
  </div>
  
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>