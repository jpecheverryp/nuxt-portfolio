<template>
<div v-if="isExternal">
  <a :class="[isGhost ? 'is-ghost' : '', 'btn']" :href="address" target="_blank">{{text}}</a>
</div>
<div v-else>
  <nuxt-link :class="[isGhost ? 'is-ghost' : '', 'btn']" :to="address">{{text}}</nuxt-link>
</div>
</template>

<script>
  export default {
    name: 'link-button',
    props: {
      text: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      isExternal: {
        default: false,
        type: Boolean,
        required: false
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
    padding: 0.875rem 1.125rem;
    border-radius: 0.625rem;
    font-size: 1.375em;
    width: 12rem;
    height: 4rem;
    text-align: center;
    display: block;
    border: #3CAF81 3px solid;
  }
  .is-ghost {
    background-color: white;
    border: #3CAF81 3px solid;
  }
</style>