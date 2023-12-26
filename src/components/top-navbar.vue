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

    <div class="square"></div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(to right, #5e62db, #222e6d);
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
    background-color: rgba(20, 19, 19, 0.26);
    border-radius: 8px;
  }
  .square {
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.08);
    margin-right: 54px;
    border-radius: 8px;

    @media (min-width: 1200px) {
      width: 45px;
      height: 45px;
    }
  }
}
</style>