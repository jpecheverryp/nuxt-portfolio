<template>
  <div class="sect__contact">
    <h2 class="heading-2">Contact me</h2>
    <div class="contact-text">
      <p>Send me an email at <a href="mailto:jpecheverryp@gmail.com">jpecheverryp@gmail.com</a><br>Or use the form below </p>
    </div>
    <contact-form />
  </div>
</template>
<script>

  export default {
    head() {
      return {
        title: '| Contact'
      }
    },
    data() {
      return {
        linkedin: 'https://www.linkedin.com/in/jpe04/',
        github: 'https://github.com/jpecheverryp',
        email: 'mailto:jpecheverryp@gmail.com',
      }
    }
  }
</script>

<style>
  .contact-text {
    text-align: center;
  }
</style>