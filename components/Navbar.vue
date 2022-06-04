<template>
  <header class="flex justify-between items-center px-6 py-4 m-0 relative">
    <nuxt-link class="text-brand text-xl font-bold" to="/">Juan P Echeverry</nuxt-link>
    <nav class="flex flex-col items-end fixed right-0 top-0 bg-brand h-screen w-1/2 p-5 text-right gap-12 translate-x-full transition duration-300 md:relative md:w-auto md:h-auto md:translate-x-0 md:bg-transparent" ref="navMenu">
        <img @click="closeMenu" class="w-8 cursor-pointer close-menu md:hidden" src="~/static/svg/exit.svg" alt="">
      <ul class="list-none p-0 m-0 flex flex-col gap-4 md:flex-row">
        <nav-link route="/" text="home" />
        <!-- <nav-link route="/about" text="about" /> -->
        <nav-link route="/dev" text="portfolio" />
        <!-- <nav-link route="/blog" text="blog" /> -->
        <nav-link route="/contact" text="contact" />
      </ul>
    </nav>
        <img @click="openMenu" class="w-8 cursor-pointer md:hidden" src="~/static/svg/menu.svg" alt="">
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
