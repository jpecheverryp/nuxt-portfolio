<template>
  <div>
    <header>
    <nuxt-link to="/">Juan P Echeverry</nuxt-link>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/dev">Portfolio</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
    </header>
    <nuxt/>
    <footer>
      <p>&copy; {{new Date().getFullYear()}} Juan P Echeverry. All Rights Reserved.</p>
      <p>This Portfolio was made using <a href="https://nuxtjs.org/" target="_blank">NuxtJS</a> and is <a href="https://github.com/jpecheverryp/nuxt-portfolio" target="_blank">Open Sourced</a> on Github</p>
      
    </footer>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style></style>