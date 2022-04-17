<template>
    <v-container class="pt-15">
        <v-row>
            <v-col lg="6">
                <h2 class="intro-text">Welcome to our website</h2> 
                <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In vitae tempore nam repellendus pariatur saepe maxime? Id aut doloremque esse.</p>
                <v-btn color="success" class="white--text" rounded>Get Started</v-btn>  
                <v-btn color="indigo" class="white--text " rounded>
                    <v-icon>mdi-play-circle</v-icon>
                    Watch Video
                </v-btn>      
            </v-col>
            <v-col lg="6">
                <img style="width: 80%" src="./../assets/cat-hero.png" alt="">
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'HeroComponent',
    data : () => ({
    //   menus: [
    //     {title: 'Home', route:'home'},  
    //     {title: 'About Us', route:'about us'},
    //     {title: 'Portfolio', route:'portfolio'},
    //     {title: 'Project', route:'project'},
    //     {title: 'Gallery', route:'gallery'},
    //     {title: 'Contact', route:'contact'},
    //   ]
  })    
}
</script>

<style scoped>
    h2.intro-text{
        font-size: 60px;
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: black;  
    }
    p.description{
        font-size: 19px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin: 60px 0px 100px 0px;
        color: black;
    }
</style>
