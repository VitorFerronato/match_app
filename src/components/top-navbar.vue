<template>
  <nav class="nav-main">
    <div class="flex-center">
      <router-link to="/"
        ><span class="font-bold text-white logo">LOGO</span></router-link
      >
      <v-text-field
        variant="outlined solo"
        density="compact"
        single-line
        hide-details
        class="ml-10 search"
      >
        <template v-slot:label>
          <span class="text-white font-bold">Buscar</span>
        </template>
      </v-text-field>
    </div>
    <div class="d-flex">
      <router-link to="/login/">
        <Dsg-btn
          :title="'Login'"
          :color="'#5E62DB'"
          @click="submit"
          class="mr-4"
        />
      </router-link>
      <router-link to="/login/register">
        <Dsg-btn :title="'Registrar'" :color="'#252525'" @click="submit" />
      </router-link>
    </div>
  </nav>
</template>

<script>
import DsgBtn from "./common/dsg-btn.vue";
export default {
  components: { DsgBtn },
  methods: {
    handleScroll() {
      const nav = document.querySelector(".nav-main");
      if (window.scrollY > 0) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.nav-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: #252525;
  padding: 0px 25px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: var(--header-height);
  transition: .2s;

  .logo {
    font-family: var(--font-family-base);
  }

  .search {
    width: 250px;
    background-color: #252525;
    border-radius: 8px;
  }
}

.scrolled {
  background-color: #111111;
}
</style>