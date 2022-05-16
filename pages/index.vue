<template>
<div class="page">
  <main class="container">
    <div class="hero__content">
      <h1>I bring ideas to reality</h1>
      <p class="subheading">My name is Juan<br> I'm a Web Developer <br/>and Web Designer</p>
      <div class="cta-btns">
        <link-button text="See my Work" address="/dev" :isExternal="false"  />
        <link-button text="Contact me" address="/contact" :isExternal="false" :isGhost="true"  />
      </div>
    </div>
    <img class="hero-img" src="~/static/svg/mobile-wireframe.svg" alt="">
  </main>
  <section>
    <h2>My Work</h2>
    <div class="projects" v-for="project in projects" :key="project.id">
      <project-card :projectData="project" :reversed="project.id % 2 === 0" />
    </div>
  </section>
</div>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'Project One',
            description: 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            slug: 'project-one',
            liveLink: 'https://github.com/'
            
          },
          {
            id: 2,
            title: 'Project Two',
            description: 'Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            slug: 'project-two',
            liveLink: 'https://github.com/'
            
          },
        ]
      }
    }
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
    font-size: 2em;
    font-size: clamp(2em, 4vw, 4em);

    text-align: center;
  }

  section {
    margin-top: 10em;
  }

  .subheading {
    text-align: center;
    font-weight: normal;
    line-height: 100%;
    font-size: 2em;
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
  .projects {
    width: clamp(2rem, 90vw, 50rem) ;
    display: block;
    margin: 0 auto;
    margin-bottom: 6rem;
  }

  @media only screen and (min-width: 700px) {
    .container {
      display: grid;
      grid-template-columns: 50% 40%;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 80rem;
    }
    h1, .subheading {
      text-align: left;
    }
    .cta-btns {
      justify-content: flex-start;
    }
  }

</style>