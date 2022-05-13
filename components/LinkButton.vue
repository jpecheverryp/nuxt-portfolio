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

<style scoped>
  .btn {
  font-size: 1.5em;
  padding: .75rem 2rem;
  border-radius: 0.25rem;
  display: block;
  border: 2px #F2542D solid;
  cursor: pointer;
  transition: .4s;
  color: #F2542D;
  background-image: linear-gradient(to left, white 50%, #F2542D 50%);
  background-size: 200%;
  background-position: 100%;
  text-decoration: none;
  text-align: center;
  position: relative;
}

.btn:hover,
.btn:focus {
  background-position: 0;
  color: white;
}
</style>