<template>
  <v-app>
    <v-main>
      <Top-navbar v-if="this.$route.path.startsWith('/main')"/>
      <Sidebar-nav v-if="this.$route.path.startsWith('/main')"/>
      <Snackbar />
      <router-view class="view" />
    </v-main>
  </v-app>
</template>

<script>
import SidebarNav from "./components/sidebar-nav.vue";
import TopNavbar from "./components/top-navbar.vue";
import Snackbar from "@/components/common/snackbar-watcher.vue";

export default {
  components: { TopNavbar, SidebarNav, Snackbar },
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


