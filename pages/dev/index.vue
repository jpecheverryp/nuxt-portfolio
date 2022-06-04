<template>
  <work-section heading="Projects" />
</template>

<script>
import workSection from '../../components/workSection.vue'
  export default {
  components: { workSection },
    head() {
      return {
        title: '| Dev'
      }
    }
  }
</script>
