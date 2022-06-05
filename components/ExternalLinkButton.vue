<template>
  <a :class="[isGhost ? 'border border-brand bg-white' : '', 'btn bg-brand']" :href="address" target="_blank">{{ text }}</a>
</template>

<script>
  export default {
    name: 'external-link-button',
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
    color: black;
    padding: 0.5em 1.125em;
    border-radius: 0.625rem;
    font-size: 1.375em;
    text-align: center;
    display: block;
  }
  
</style>