<template>
    <v-app-bar app
      color="white"
      elevate-on-scroll
      elevation="4"
    >
      <v-app-bar-nav-icon @click="$emit('handDrawer')"></v-app-bar-nav-icon>
      <v-spacer/>
      <v-col lg="6" cols="12">
        <v-form class="mt-5">
          <v-text-field rounded outlined dense placeholder="Search here" append-icon="mdi-magnify"/>
        </v-form>
      </v-col>

      <v-spacer></v-spacer>
    
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-span v-bind="attrs" v-on="on" style="curcos: pointer" class="mx-5 mr-10">
            <v-chip link>
              <v-badge dot bottom offset-y="10" offset-x="10" color="green">
                <v-avatar size="50">
                  <img src="./../assets/marina.jpeg" alt="">
                </v-avatar>
              </v-badge>
              <span>Mariana Renata</span>
            </v-chip>   
          </v-span>
        </template>
        <v-list width="250" class="10">
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="./../assets/marina.jpeg" alt="">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                Mariana Renata
              </v-list-item-title>
              <v-list-item-subtitle>
                Logged In
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-for="(menu, index) in menus" :key="index">
            <v-list-item-icon>
              <v-icon>
                {{menu.icon}}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{menu.title}}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({
      menus: [
        { title: "Profile", icon: "mdi-account" },
        { title: "Change Password", icon: "mdi-key" },
        { title: "Setting", icon: "mdi-cog" },
        { title: "Logout", icon: "mdi-logout" },
      ],
    }),
  }
</script>
