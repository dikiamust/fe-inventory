<template>
    <v-container id="contact">
        <v-row justify="center">
            <v-col lg="12" class="text-center">
                <v-subheader class="text-h4 justify-center">
                    Contact Us
                </v-subheader>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolorum?</p>
            </v-col> 
            <v-col lg="6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8345060597194!2d107.54311981521379!3d-6.910382695006819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e616a7b6fccf%3A0x96c04e795282aeff!2sPT%20Indowira%20Putra%20Paint%20Factory!5e0!3m2!1sid!2sid!4v1644133700836!5m2!1sid!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </v-col>
            <v-col lg="6">
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                    <v-text-field
                    v-model="contactInfo.name"
                    label="Name"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>

                     <v-text-field
                    v-model="telepon"
                    :rules="teleponeRules"
                    label="Telepon (tidak wajib)"
                    ></v-text-field>

                    <v-textarea
                    v-model="pesan"
                    :rules="pesanRules"
                    label="Pesan"
                    ></v-textarea>

                    <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                    >
                    Send
                    </v-btn>
                </v-form>
            </v-col>

        </v-row> 
    </v-container>
</template>

<script>
  export default {
    name: 'Contact',
    data : () => ({
        contactInfo:''

  })    
}
</script>

<style scoped>
   
</style>
