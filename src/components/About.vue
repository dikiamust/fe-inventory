<template>
    <v-container id="about">
        <v-row>
            <v-col lg="6">
                <img style="width: 80%; border-radius: 3%;" src="./../assets/rumah-2.jpg" alt="">
            </v-col>
            <v-col lg="6">  
                <v-subheader class="text-h4">About Us</v-subheader> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit optio, atque adipisci in illo dolores molestias laudantium. Explicabo velit aliquam quibusdam similique. Maxime perferendis consectetur facere asperiores suscipit omnis.</p>  
                <v-list>
                    <v-list-item>
                        <v-icon color="success" class="checklist">mdi-check-all</v-icon>
                        <v-list-item-subtitle>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corporis.
                        </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-icon color="success" class="checklist">mdi-check-all</v-icon>
                        <v-list-item-subtitle>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corporis.
                        </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                        <v-icon color="success" class="checklist">mdi-check-all</v-icon>
                        <v-list-item-subtitle>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corporis.
                        </v-list-item-subtitle>
                    </v-list-item>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id exercitationem doloribus distinctio alias consectetur ipsum inventore quo quos totam minima, ipsa vero. Explicabo mollitia molestias iusto! Nesciunt atque debitis hic beatae deleniti architecto inventore tenetur quis. Cum quae laborum odio.</p>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'About',
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
    .checklist{
        margin-right: 5px;
    }
</style>
