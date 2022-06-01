<template>
  <div>
    <h2 class="heading-2">My Blog</h2>
  <ul>
    <li v-for="blog in articles" :key="blog.slug">
      <nuxt-link :to="`/blog/${blog.slug}`">
      <div>
        <h3>{{ blog.title }}</h3>
        <p>{{formatDate(blog.gitCreatedAt)}}</p>
      </div>
      </nuxt-link>
    </li>
  </ul>
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
      const articles = await $content('articles')
      .only(['title', 'slug', 'gitCreatedAt'])
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