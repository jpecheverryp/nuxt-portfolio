<template>
  <div class="flex flex-col w-full md:grid grid-cols-2 justify-between gap-4 grid-flow-row-dense">
    <div :class="[this.reversed ? 'col-start-2' : 'img-container']">
      <nuxt-link :to="this.devLink">
      <img :src="projectData.img" :alt="projectData.title">
      </nuxt-link>
    </div>
    <div class="card-content">
      <h3 class="text-xl text-center md:text-left md:text-3xl md:m-0">{{ projectData.title }}</h3>
      <p class="text-lg text-center md:text-left md:my-7 md:mx-0">{{ projectData.description }}</p>
      <div class="text-xs flex gap-8 basis-0 grow justify-center my-8">
        <nuxt-link-button text="Learn More" :address="this.devLink" />
        <external-link-button text="Live Site" :address="projectData.liveLink" :isExternal="true" :isGhost="true" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        devLink: '/dev/' + this.projectData.slug
      }
    },
    props: {
      projectData: {
        type: Object,
        required: true
      },
      reversed: {
        default: false,
        type: Boolean,
        required: false
      }
    }
  }
</script>