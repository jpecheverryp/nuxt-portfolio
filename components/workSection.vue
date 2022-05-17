<template>
    <section>
    <h2>{{ heading }}</h2>
    <div class="projects" v-for="project in projects" :key="project.id">
      <project-card :projectData="project" :reversed="project.id % 2 === 0" />
    </div>
  </section>
</template>

<script>
  import projects from '~/data/projects'

  export default {
    props: {
      heading: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        projects: projects
      }
    }
  }
</script>

<style scoped>
  h2 {
    margin-bottom: 2em;
  }
</style>