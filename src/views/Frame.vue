<template>
  <div>
    <Header @handDrawer="drawer = !drawer" />
    <Sidebar :drawer="drawer" />
    <Dashboard />
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import Dashboard from './Dashboard.vue'

export default {
  name: 'Frame',
  components: { Header, Sidebar, Dashboard},
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: true,
  }),  
}
</script>
