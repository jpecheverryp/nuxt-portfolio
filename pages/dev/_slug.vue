<template>
  <div>
    <h2>{{ projectTitle }}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        projectTitle: this.$route.path
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>