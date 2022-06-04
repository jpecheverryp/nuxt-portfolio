<template>
  <div class="project-page">
    <!-- <pre>{{ project }}</pre> -->
    <nuxt-link class="nuxt-link" to="/dev">Back to Projects</nuxt-link>
    <h2 class="text-3xl text-center">{{ project.title }}</h2>
    <nuxt-img :src="project.img" />
    <hr>
    <p>Website: <a :href="project.liveLink" target="_blank">Live Site</a></p>
    <p>Repository: <a :href="project.repoLink" target="_blank">GitHub Repository</a></p>
    <p>{{ project.description }}</p>

  </div>
</template>

<script>
  import projects from '~/data/projects'
  
  export default {
    data() {
      return {
        project: projects.find(project => project.slug === this.$route.params.slug),

      }
    }
  }
</script>

<style scoped>
  h2 {
    font-size: 2.5em;
  }
  p {
    margin: .75rem;
  }
  a {
    color: #3CAF81;
  }
  .project-page {
    padding: 2rem;
  }
  .nuxt-link {
    margin: 0 auto;
    display: block;
    width: fit-content;
    color: #3CAF81;
    font-size: 1.5em;
  }
  img {
    max-width: 40rem;
    margin: 0 auto;
    display: block;
  }
</style>