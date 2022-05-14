<template>
  <div>
    <header>
    <nuxt-link to="/">JPE</nuxt-link>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/dev">Portfolio</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><a href="https://github.com/jpecheverryp/nuxt-portfolio" target="_blank">Source</a></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
    </header>
    <div class="wrapper">
    <nuxt/>
    </div>
    <footer>
      <p>&copy; {{new Date().getFullYear()}} Juan P Echeverry. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style></style>