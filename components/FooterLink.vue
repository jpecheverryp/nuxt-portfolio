<template>
  <a target="_blank" :href="route">{{ text }}</a>
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

<style scoped>
  
  a {
    text-decoration: none;
    color: black;
    background-image: linear-gradient(to bottom, #eee 50%, #7ED3B1 50%);
    background-size: 100% 200%;
    background-position: 0 40%;
    transition: .4s;
    
  }
  a:hover {
    background-position: 0 90%;
  }
</style>