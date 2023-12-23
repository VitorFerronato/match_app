<template>
  <div>
    <Game-banner />
    <Tournaments-main />
  </div>
</template>

<script>
import GameBanner from "./components/game-banner.vue";
import TournamentsMain from './components/tournaments/tournaments-main.vue';
export default {
  components: { GameBanner, TournamentsMain },
  name: "home-main",
};
</script>

<style lang="scss" scoped>
</style>