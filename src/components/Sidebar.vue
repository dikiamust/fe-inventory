<template>
    <v-navigation-drawer v-model="drawer" app color="indigo">
      <div class="text-center profile">
          <v-avatar class="mb-4" color="grey darken-1" size="64">
              <v-img aspect-ratio="30" src="./../assets/vue.png"></v-img>
          </v-avatar>
      </div>
      <v-divider></v-divider>

      <v-list>
       <v-list-item link >
          <v-list-item-icon>
            <v-icon color="white">mdi-microsoft-windows</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title ><router-link class="router-link" to="/frame">Dashboard</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link >
          <v-list-item-icon>
            <v-icon color="white">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title ><router-link class="router-link" to="/tes">Profile</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

         <v-list-item link >
          <v-list-item-icon>
            <v-icon color="white">mdi-clipboard-list-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title ><router-link class="router-link" to="/frame">Product</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link >
          <v-list-item-icon>
            <v-icon color="white">mdi-home-circle-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title ><router-link class="router-link" to="/">Home</router-link></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    props:['drawer'],
    name: 'Sidebar',
    data: () => ({
          links: [
        ['mdi-microsoft-windows', 'Dashboard'],
        ['mdi-account', 'Profile'],
        ['mdi-clipboard-list-outline', 'Product'],
        ['mdi-order-bool-descending-variant', 'Order'],
        ['mdi-cogs', 'System Settings'],
      ],    
    }),
  }
</script>
<style>
  .router-link{
    color: white !important;
    text-decoration: none !important;
  }
  .profile{
    margin: 60px 0px 60px 0px!important ;
  }
</style>
