<template>
  <div class="blog-post">
    <nuxt-link class="back-link" to="/blog">Back to Articles</nuxt-link>
    <p class="align-left">Article created: {{ formatDate(article.gitCreatedAt) }}</p>
    <p class="align-left">Article last updated: {{ formatDate(article.gitUpdatedAt) }}</p>
    <hr>
    <h1>{{ article.title }}</h1>

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
  .back-link {
    color: #3CAF81;
  }
  .align-left {
    text-align: left;
  }
</style>