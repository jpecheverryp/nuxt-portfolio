<template>
  <nuxt-link :class="[isGhost ? 'is-ghost' : '', 'btn']" :to="address">{{ text }}</nuxt-link>
</template>

<script>
  export default {
    name: 'nuxt-link-button',
    props: {
      text: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      isGhost: {
        default: false,
        type: Boolean,
        required: false
      }
    }
  }
</script>

<style scoped>
  .btn {
    text-decoration: none;
    background-color: #3CAF81;
    color: black;
    padding: 0.5em 1.125em;
    border-radius: 0.625rem;
    font-size: 1.375em;
    text-align: center;
    display: block;
    border: #3CAF81 .1em solid;
  }
  .is-ghost {
    background-color: white;
    border: #3CAF81 .15em solid;
  }
</style>