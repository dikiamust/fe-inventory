<template>
  <div>
    <Navigation/>
    <HeroComponent/>
    <About/>
    <Portfolio/>
    <Project/>
    <Gallery/>
    <Contact/>
    <Footer/>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import HeroComponent from '../components/HeroComponent.vue'
import About from '../components/About.vue'
import Portfolio from '../components/Portfolio.vue'
import Project from '../components/Project.vue'
import Gallery from '../components/Gallery.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
     HeroComponent, About, Portfolio, Project, Gallery, Contact, Footer, Navigation
  },
  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
}
</script>
