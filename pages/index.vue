<template>
<div class="page">
  <main class="px-12 md:grid md:grid-cols-2 md:justify-between md:my-0 md:mx-auto md:max-w-7xl">
    <div class="hero__content">
      <h1 class="text-5xl text-center uppercase font-bold md:text-left">I bring ideas to reality</h1>
      <p class="text-center font-normal text-2xl md:text-left">My name is Juan<br> I'm a Full Stack Developer <br/>and Web Designer</p>
      <div class="flex flex-wrap my-6 mx-auto gap-8 gap-y-4 justify-center md:justify-start md:mt-24">
        <nuxt-link-button text="See my Work" address="/dev" />
        <nuxt-link-button text="Contact me" address="/contact" :isGhost="true"  />
      </div>
    </div>
    <img class="hero-animation w-1/2 block mt-16 mx-auto mb-0" src="~/static/svg/mobile-wireframe.svg" alt="">
  </main>
  <work-section class="mt-36" heading="My Work" />
  <h2 class="text-3xl text-center">Contact me</h2>
  <contact-form />
</div>
</template>

<script>
  export default {
    
  }

</script>

<style>
  @keyframes slideFromRight {
    0% {
      transform: translateX(50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .hero-animation {
    animation: 1s ease-in-out 0s 1 slideFromRight;
    transition: .5s;
  }
</style>