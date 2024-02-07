<template>
  <v-app>
    <v-main>
      <div v-if="!mobile">
        <Top-navbar v-if="!this.$route.path.startsWith('/login')" />
        <Sidebar-nav v-if="!this.$route.path.startsWith('/login')" />
        <Snackbar />
        <router-view class="view" />
      </div>

      <div v-else class="mobile-message">
        <h2>Sorry, this app is not supported on Mobile Devices</h2>
        <p>To use this app, please use a computer or Tablet</p>
      </div>
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
    mobile: false,
  }),

  watch: {
    $route(route) {
      console.log("Rota atual:", route);

    },
    isLogged: {
      handler(value) {
        console.log("Esta logado", value);
      },
      immediate: true,
    },
  },

  computed: {
    isLogged() {
      return this.$store.state.user.isLogged;
    },
  },

  methods: {
    checkScreen() {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 750) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
    },
  },

  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
  },
};
</script>

<style lang="scss" >
.v-main {
  background-color: var(--color-secondary);
  font-family: var(--font-family-base);
  position: relative;
}

.view {
  padding-left: calc(var(--sidebar-width) + 2rem);
  padding-right: 2rem;
  padding-top: 2rem;
}

.mobile-message {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  text-align: center;
  transform: translateX(-50%);
  color: #fff;

  p {
    margin-top: 16px;
  }
}
</style>


