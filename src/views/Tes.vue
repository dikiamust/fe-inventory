<template>
  <div>
    <Header @handDrawer="drawer = !drawer" />
    <Sidebar :drawer="drawer" />
    <h1>Testing</h1>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
// import Dashboard from './Dashboard.vue'

export default {
  name: 'Tes',
  components: { Header, Sidebar},
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: true,
  }),  
}
</script>
