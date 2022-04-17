<template>
    <v-footer padless>
        <v-col lg="12" color="success">
            <v-row justify="center">
                <v-col lg="4" class="text-center">
                    <v-toolbar-title>PT Indowira Putra Paint Factory</v-toolbar-title>
                    <v-card-text>
                        <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4 black--text"
                        icon
                        >
                            <v-icon size="24px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                    </v-card-text>
                    <v-subheader>Daftarkan dan dapatkan penawaran menarik</v-subheader>
                    <v-form style="margin-top: 15px">
                        <v-row>
                            <v-text-field label="Email Anda" outlined dense>
                            </v-text-field>
                            <v-btn rounded color="error" style="margin-left: 10px">Daftarkan email saya</v-btn>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
        </v-col>
        <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
        >
            <v-card-text class="white--text pt-0">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </v-card-text>

             <v-divider></v-divider>

            <v-card-text class="white--text">
                &copy; All Rights Reserved {{ new Date().getFullYear() }} — <strong>PT Indowira Putra Paint Factory</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data : () => ({
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  })    
}
</script>

<style scoped>
   
</style>
