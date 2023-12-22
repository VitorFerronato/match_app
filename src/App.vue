<template>
  <v-app>
    <v-main>
      <Top-navbar />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TopNavbar from './components/top-navbar.vue'

export default {
  components: { TopNavbar },
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

