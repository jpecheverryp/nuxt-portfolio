<template>
  <div>
    <h2 class="heading-2">My Blog</h2>
  <ul>
    <li v-for="blog in articles" :key="blog.slug">
      <nuxt-link :to="`/blog/${blog.slug}`">
      <div>
        <h3>{{ blog.title }}</h3>
      </div>
      </nuxt-link>
    </li>
  </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('gitCreatedAt', 'desc')
      .fetch()

      return {
        articles
      }
    }
  }
</script>

<style scoped>
  a {
    color: #3CAF81;
  }
</style>