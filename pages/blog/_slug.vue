<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt">
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

    <nuxt-content :document="article" />
  </div>
</template>

<script>
  export default {
    methods: {
      formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateStr).toLocaleString('en', options)
      }
    },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    }
  }
</script>

<style lang="scss" scoped>

</style>