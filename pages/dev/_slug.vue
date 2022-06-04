<template>
  <div class="p-8">
    <nuxt-link class="nuxt-link mb-6 mx-auto block w-fit text-brand text-2xl" to="/dev">Back to Projects</nuxt-link>
    <h2 class="text-4xl mb-4 text-center">{{ project.title }}</h2>
    <nuxt-img class="max-w-xl my-0 mx-auto block" :src="project.img" />
    <div class="w-3/5 mx-auto">
      <p class="my-4">Website: <a class="text-brand underline" :href="project.liveLink" target="_blank">Live Site</a></p>
      <p class="my-4">Repository: <a class="text-brand underline" :href="project.repoLink" target="_blank">GitHub Repository</a></p>
      <p class="my-4">{{ project.description }}</p>
    </div>

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