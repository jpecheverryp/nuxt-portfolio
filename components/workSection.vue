<template>
    <section>
    <h2 class="mb-8 text-4xl text-center ">{{ heading }}</h2>
    <div class="projects" v-for="project in projects" >
      <project-card :projectData="project" :key="project.id" :reversed="project.id % 2 === 0" />
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
