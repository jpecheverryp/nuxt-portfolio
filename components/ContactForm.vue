<template>
  <section id="contact" class="text-center">
    <h2 class="text-3xl text-center mb-5">Contact me</h2>
    <p class="text-center">Send me an email at <a class="text-brand underline"
        href="mailto:jpecheverryp@gmail.com">jpecheverryp@gmail.com</a><br>Or use the form below </p>
    <form class="w-full max-w-lg mt-0 mx-auto mb-24" action="https://formsubmit.co/jpecheverryp@gmail.com"
      method="POST">
      <div class="text-left mb-4">
        <label class="block" for="username">Name*</label>
        <input class="w-full py-2 px-3" type="text" name="username" id="username" required>
      </div>
      <div class="text-left mb-4">
        <label class="block" for="email">Email*</label>
        <input class="w-full py-2 px-3" type="email" name="email" id="email" required>
      </div>
      <div class="text-left mb-4">
        <label class="block" for="message">Message*</label>
        <textarea class="w-full resize-y" name="message" id="message" cols="30" rows="10"></textarea>
      </div>
      <input class="w-full py-2 px-3 bg-brand border-none rounded-md" type="submit" value="Send Message">
    </form>
  </section>

</template>

<script>
export default {

}
</script>
