<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="../assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">
      Sorry, nothing here...<strong>(404)</strong>
    </p>
     <router-link to="/">Go Back</router-link>
  </div>
</template>

<script >
export default {
  name: 'PageNotFound'
}
</script>
