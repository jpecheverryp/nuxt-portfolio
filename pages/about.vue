<template>
  <div>
    <h2 class="text-3xl text-center">About</h2>
    <div class="two-cols">
      <p>
      My name is Juan Pablo Echeverry, I am a software developer with a passion for coding and solving problems.<br/>
      I mainly use frontend technologies such as HTML, CSS, JavaScript, and cool JS frameworks such as React, Next, Vue and Nuxt.<br/>
      I also have implemented backend solutions developing APIs and setting up databases with PostgreSQL and MySQL.<br/>
      When I'm not coding I love to learn about personal finances, and I love indoor rock climbing, haven't tried outdoor climbing yet!!
      </p>  
      <nuxt-img class="profile-pic" src="images/profilePic.jpg" />
    </div>
    <!-- TODO -->
    <!-- ADD gallery with 3 pics minimum in a grid -->
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .profile-pic {
    max-width: 50%;
  }


  @media only screen and (min-width: 700px) {
    .two-cols {
      display: flex;
      flex-basis: 0;
      flex-grow: 1;
    }
  }
</style>