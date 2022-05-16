<template>
  <header>
    <nuxt-link class="brand" to="/">Juan P Echeverry</nuxt-link>
    <nav ref="navMenu">
        <img @click="closeMenu" class="nav-icon close-menu" src="~/static/svg/exit.svg" alt="">
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/dev">Portfolio</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>
        <img @click="openMenu" class="nav-icon" src="~/static/svg/menu.svg" alt="">
    </header>
</template>

<script>

  export default {
    methods: {
      openMenu() {
        this.$refs.navMenu.style.transform = 'translateX(0)'
      },
      closeMenu() {
        this.$refs.navMenu.style.transform = 'translateX(100%)'
      }
    }
  }
</script>

<style scoped>

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.25em;
    margin: 0;
    position: relative;
  }
  .nav-icon {
    width: 2rem;
    cursor: pointer;
  }
  nav {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    background: #3CAF81;
    height: 100vh;
    width: 50%;
    padding: 2em;
    text-align: right;
    gap: 3em;
    transform: translateX(100%);
    transition: transform .3s;
  }
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  nav a {
    color: white;
    text-decoration: none;
    font-size: 1.5em;
  }
  .brand {
    color: #3CAF81;
    font-size: 1.125em;
    text-decoration: none;
    font-weight: 700;
  }
</style>