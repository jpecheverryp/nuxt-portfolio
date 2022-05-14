<template>
<div v-if="isExternal">
  <a class="btn" :href="address" target="_blank">{{text}}</a>
</div>
<div v-else>
  <nuxt-link class="btn" :to="address">{{text}}</nuxt-link>
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
      }
    }
  }
</script>

<style scoped></style>