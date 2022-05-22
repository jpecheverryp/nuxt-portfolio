<template>
  <div class="sect__contact">
    <h2 class="heading-2">Contact me</h2>
    <ul>
      <li>
        <link-button :isExternal="true" text="LinkedIn" :address="linkedin"  />
      </li>
      <li>
        <link-button :isExternal="true" text="Github" :address="github"  />
      </li>
      <li>
        <link-button :isExternal="true" text="Email" :address="email"  />
      </li>
    </ul>
    
  </div>
</template>
<script>
import LinkButton from '../components/LinkButton.vue'

  export default {
  components: { LinkButton },
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

<style></style>