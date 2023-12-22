<template>
  <v-app>
    <v-main>
      <Top-navbar />
      <Sidebar-nav />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SidebarNav from "./components/sidebar-nav.vue";
import TopNavbar from "./components/top-navbar.vue";

export default {
  components: { TopNavbar, SidebarNav },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

