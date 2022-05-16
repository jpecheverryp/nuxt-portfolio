<template>
  <footer>
      <hr />
      <br />
      <p>This is an <a href="https://github.com/jpecheverryp/nuxt-portfolio" target="_blank">Open Source</a> Portfolio created with <a href="https://nuxtjs.org/" target="_blank">NuxtJS</a></p>
      <p>&copy; {{new Date().getFullYear()}} Juan P Echeverry. All Rights Reserved.</p>
    </footer>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  footer {
    text-align: center;
    margin-bottom: 4em;
  }
  hr {
    width: 80%;
    border-top: 2px solid #3CAF81;
  }
  p {
    padding: 0;
    margin: 0;
    line-height: 140%;
  }
  a {
    text-decoration: none;
    color: black;
    background-image: linear-gradient(to bottom, white 50%, #7ED3B1 50%);
    background-size: 100% 200%;
    background-position: 0 40%;
    transition: .4s;
    
  }
  a:hover {
    background-position: 0 90%;
  }
</style>