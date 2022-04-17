<template>
    <v-container id="porfolio">
        <v-row justify="center">
            <v-col lg="12" class="text-center">
                <v-subheader class="text-h4 justify-center">
                    Portfolio
                </v-subheader>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolorum?</p>
            </v-col>  
            <v-col lg="12">
                <div class="text-center ">
                    <v-chip @click="activePortfolio = 'webapp'" :color="activePortfolio === 'webapp' ? 'success' : ''" class="mx-5">Web App</v-chip>
                    <v-chip  @click="activePortfolio = 'mobileapp'" :color="activePortfolio === 'mobileapp' ? 'success' : ''" class="mx-5">Mobile App</v-chip>
                    <v-chip  @click="activePortfolio = 'desktopapp'" :color="activePortfolio === 'desktopapp' ? 'success' : ''" class="mx-5">Desktop App</v-chip>
                </div>
            </v-col> 
            <slot v-if="activePortfolio === 'webapp'">
                <v-col lg="3" v-for="(web, webindex) in webApps" :key="webindex">
                   <v-card>
                        <v-img
                        src="web.image"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                        >
                        <v-card-title>{{web.title}}</v-card-title>
                        </v-img>
                  </v-card>
               </v-col>
            </slot>
            <slot v-if="activePortfolio === 'mobileapp'">
                <v-col lg="3" v-for="(mobile, mobileindex) in mobileApps" :key="mobileindex">
                   <v-card>
                        <v-img
                        src="mobile.image"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        height="200px"
                        >
                        <v-card-title>{{mobile.title}}</v-card-title>
                        </v-img>
                  </v-card>
               </v-col>
            </slot>

        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'Portrfolio',
    data : () => ({
      activePortfolio:'webapp',
      webApps: [
        {title: 'Web App 1', image:'./../assets/automotive-cat.png'},  
        // {title: 'About Us', route:'about us'},
        // {title: 'Portfolio', route:'portfolio'},
        // {title: 'Project', route:'project'},
        // {title: 'Gallery', route:'gallery'},
        // {title: 'Contact', route:'contact'},
    ],
      mobileApps: [
        {title: 'Mobile App 1', image:'./../assets/automotive-cat.png'},  
        // {title: 'About Us', route:'about us'},
        // {title: 'Portfolio', route:'portfolio'},
        // {title: 'Project', route:'project'},
        // {title: 'Gallery', route:'gallery'},
        // {title: 'Contact', route:'contact'},
    ]
  })    
}
</script>

<style scoped>
   
</style>
