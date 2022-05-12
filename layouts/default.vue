<template>
  <div>
    <nuxt-link to="/">Juan P Echeverry</nuxt-link>
    <nav>
      <ul>
        <nuxt-link to="/dev"><li>Dev</li></nuxt-link>
        <a href="https://github.com/jpecheverryp/nuxt-portfolio" target="_blank"><li>Source</li></a>
        <nuxt-link to="/contact"><li>Contact</li></nuxt-link>
      </ul>
    </nav>
    <nuxt/>
    <footer>
      <p>&copy; {{new Date().getFullYear()}} Juan P Echeverry. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>