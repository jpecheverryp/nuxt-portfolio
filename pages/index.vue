<template>
  <div class="container">
    <div class="hero__content">
      <h1>I bring ideas to reality</h1>
      <h2>My name is Juan<br> I'm a Web Developer <br/>and Web Designer</h2>
      <div class="cta-btns">
        <link-button text="See my Work" address="/dev" :isExternal="false"  />
        <link-button text="Contact me" address="/contact" :isExternal="false" :isGhost="true"  />
      </div>
    </div>
    <img class="hero-img" src="~/static/svg/mobile-wireframe.svg" alt="">
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
  .container {
    padding: 0 1em;
  }
  h1 {
    font-size: 3em;
    font-size: clamp(2.5em, 5.5vw, 5em);
    text-align: center;
    text-transform: uppercase;
    line-height: 100%;
    font-weight: bold;
  }
  h2 {
    text-align: center;
    font-weight: normal;
    line-height: 100%;
    font-size: clamp(1.625em, 3vw, 3.25em) ;
  }
  .hero-img {
    width: 50%;
    display: block;
    margin: 4rem auto 0;
  }
  .cta-btns {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 2rem;
    row-gap: 1rem;
    justify-content: center;
  }

  @media only screen and (min-width: 700px) {
    .container {
      display: grid;
      grid-template-columns: 60% 40%;
      padding: 0 1.5em;
    }
    h1, h2 {
      text-align: left;
    }
    .cta-btns {
      justify-content: flex-start;
    }
  }

</style>