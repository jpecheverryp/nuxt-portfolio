<template>
  <div class="blog-post">
    <h1>{{ article.title }}</h1>
    <p>Article created: {{ formatDate(article.createdAt) }}</p>
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

    <nuxt-content :document="article" class="nuxt-content" />
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

<style scoped>
  .blog-post {
    text-align: center;
    max-width: 50rem;
    display: block;
    margin: 0 auto 6rem;
  }
  h1 {
    font-size: 2rem; text-align: center;
  }
  h2 {
    font-size: 2rem;
  }
</style>