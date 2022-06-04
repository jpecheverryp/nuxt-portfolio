<template>
  <div class="text-center">
    <h3 class="text-brand">Say Hi</h3>
    <form class="w-fit mt-0 mx-auto mb-24" action="https://formsubmit.co/jpecheverryp@gmail.com" method="POST">
      <div class="text-left">
        <label class="block" for="username">Name*</label>
        <input class="w-full py-2 px-3" type="text" name="username" id="username" required>
      </div>
      <div class="text-left">
        <label class="block" for="email">Email*</label>
        <input class="w-full py-2 px-3" type="email" name="email" id="email" required>
      </div>
      <div class="text-left">
        <label class="block" for="message">Message*</label>
        <textarea class="resize-y" name="message" id="message" cols="30" rows="10"></textarea>
      </div>
      <input class="w-full py-2 px-3 bg-brand border-none rounded-md" type="submit" value="Send Message">
    </form>
  </div>
  
</template>

<script>
  export default {
    
  }
</script>
