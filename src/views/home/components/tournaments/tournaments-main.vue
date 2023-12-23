<template>
  <div class="mb-10">
    <Tournament-game />
    <Tournament-game />
  </div>
</template>

<script>
import TournamentGame from './components/tournament-game.vue';

export default {
  components: { TournamentGame },
};
</script>
