<template>
  <li><nuxt-link class="text-white no-underline text-xl capitalize md:text-black md:text-lg" :to="route">{{ text }}</nuxt-link></li>
</template>

<script>
  export default {
    props: {
      route: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
    }
  }
</script>