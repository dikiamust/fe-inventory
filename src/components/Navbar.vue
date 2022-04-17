<template>
  <v-app-bar
      style="padding: 0px 90px"
      app
      color="white"
      light
      elevation="6"
      elevate-on-scroll
  >
    <!-- <v-toolbar-title></v-toolbar-title> -->
    <img src="./../assets/iwpaint-logo.png" alt="" style="max-width: 3%">

    <v-spacer/>
    <v-list link v-for="(menu, index) in menus" :key="index" :to="menu.router">
      <v-list-item>
        <v-list-item-title>
          {{menu.title}}
        </v-list-item-title>
      </v-list-item> 
    </v-list>
    <v-btn text>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn outlined color="success">
      <router-link to="/login">Get Started</router-link>
    </v-btn>
   
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Navbar',
      data : () => ({
      menus: [
        {title: 'Home', router:'home'},  
        {title: 'About Us', router:'login'},
        {title: 'Portfolio', router:'login'},
        {title: 'Project', router:'login'},
        {title: 'Gallery', router:'login'},
        {title: 'Contact', router:'login'},
      ]
  })    
}
</script>

<style scoped>
  .v-toolbar__title{
    font-size: 20px;
    color:black;
    font-weight: 800;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer !important;
  }
</style>
