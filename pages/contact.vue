<template>
  <div class="sect__contact">
    <h2>Contact me</h2>
    <ul>
      <li><a class="social-link" :href="linkedin" target="_blank">LinkedIn</a></li>
      <li><a class="social-link" :href="github" target="_blank">Github</a></li>
      <li><a class="social-link" :href="email">Email</a></li>

    </ul>
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

<style scoped>
  h2 {
    text-transform: uppercase;
  }
  .sect__contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;


  }
  li {
    padding: 0;
    margin: 0;
  }
  
  .social-link {
    display: block;
    padding: .5rem 1rem; 
    background-color: #F2542D;
    color: white;
    text-decoration: none;
    border-radius: 0.2rem;
    text-align: center;
  }
</style>