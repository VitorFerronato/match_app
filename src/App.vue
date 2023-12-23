<template>
  <v-app>
    <v-main>
      <Top-navbar />
      <Sidebar-nav />
      <router-view class="view" />
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

<style lang="scss" >
.v-main {
  background-color: var(--color-secondary);
  font-family: var(--font-family-base);
}

.view {
  padding-left: calc(var(--sidebar-width) + 2rem);
  padding-right: 2rem;
  padding-top: 2rem;
}
</style>


