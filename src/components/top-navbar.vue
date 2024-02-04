<template>
  <nav class="nav-main">
    <div class="flex-center">
      <span class="font-bold text-white logo">LOGO</span>
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
        <v-btn class="mr-2" color="#5E62DB" @click="submit">Login</v-btn>
      </router-link>
      <router-link to="/login/register">
        <v-btn color="#252525" @click="submit">Registrar</v-btn>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
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

  .logo {
    font-family: var(--font-family-base);
  }

  .search {
    width: 250px;
    background-color: #252525;
    border-radius: 8px;
  }
  
}
</style>