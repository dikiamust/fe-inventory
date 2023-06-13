<template>
  <div class="main-wrapper">
    <v-main class="d-flex justify-center align-center text-center">
      <h1 class="welcome">Inventory</h1>
      <v-col cols="10" lg="4" class="mx-auto mt-3">
        <v-card class="pa-4">
          <div class="text-center">
            <v-avatar size="100" color="indigo lighten-4">
              <img src="./../assets/vue.png" alt="logo">
            </v-avatar>
            <p>Login to your account</p>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="passwordShow?'text':'password'"
                label="Password"
                placeholder="Password"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
              />
              <v-switch label="Remember me" color="indigo"></v-switch>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="indigo">
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
            <router-link to="/" class="my-4">Belum punya akun? Register disini</router-link>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
    <v-snackbar top color="green" v-model="snackbar">
      Login success
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LoginDashboard',
  data: () => ({
    loading: false,
    snackbar:false,
    passwordShow:false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be 6  characters or more!',
    ],
  }),
  methods:{
    submitHandler() {
      this.loading = true
      if (this.$refs.form.validate()) {
         this.loading = false
        const loginData = {
          email: this.email,
          password: this.password,
        };

        axios.post('http://localhost:4000/auth/signin', loginData)
          .then(response => {
            console.log(response.status)
            if(response.status === 200){
              this.$router.push('/frame');
              this.snackbar = true;
              this.loading = false
            }
          })
          .catch(error => {
            console.error('error: ',error);
          });
      }
    }
  }
};
</script>
<style>
  .main-wrapper{
    max-width: 1200px;
    margin: 0 auto;
  }
  .welcome{
    margin-top: 120px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  p, v-text-field{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>

