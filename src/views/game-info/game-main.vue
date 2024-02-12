<template>
  <div>
    <Game-header-info />
    <Game-info-main />
  </div>
</template>

<script>
import GameHeaderInfo from './game-header-info.vue'
import GameInfoMain from './game-info-body/game-info-main.vue'
export default {
    name: 'game-main',
  components: { GameHeaderInfo, GameInfoMain },

}
</script>

<style>

</style>