<template>
  <a class="underline text-brand" target="_blank" :href="route">{{ text }}</a>
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
