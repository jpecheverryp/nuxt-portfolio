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

<style scoped>

  .wrapper {
    padding-bottom: 7rem;
  }

  footer {
    border-top: 5px solid #0E9594;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    background: #127475;
    color: white;
    height: 4rem;
  }
</style>