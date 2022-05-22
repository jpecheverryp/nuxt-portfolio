<template>
  <div :class="[this.reversed ? 'reversed' : '' , 'projectCard']">
    <div class="img-container">
      <nuxt-link :to="this.devLink">
      <img :src="projectData.img" :alt="projectData.title">
      </nuxt-link>
    </div>
    <div class="card-content">
      <h3>{{ projectData.title }}</h3>
      <p class="description">{{ projectData.description }}</p>
      <div class="buttons">
        <link-button text="Learn More" :address="this.devLink" />
        <link-button text="Live Site" :address="projectData.liveLink" :isExternal="true" :isGhost="true" />
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

<style scoped>
  .projectCard {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .buttons {
    font-size: 12px;
    display: flex;
    gap: 2em;
    flex-basis: 0;
    flex-grow: 1;
    justify-content: center;
  }
  h3 {
    font-size: 1.66em;
    text-align: center;
  }
  p.description {
    font-size: 1.3em;
    line-height: 140%;
    text-align: center;
  }

  @media only screen and (min-width: 650px) {
    h3 {
      text-align: left;
      font-size: 2em;
      margin: 0;
    }
    p.description {
      text-align: left;
      margin: 1.7em 0;
    }
    .projectCard {
      display: grid;
      grid-template-columns: 46% 46%;
      justify-content: space-between;
      grid-auto-flow: dense;
    }

    .projectCard.reversed div:first-child {
      grid-column: 2;
    }
    
    .buttons {
      justify-content: flex-start;
    }
  }

</style>