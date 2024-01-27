<template>
  <div class="mt-10">
    <h4 class="text-white font-bold text-h4 mb-2">TORNEIOS</h4>
    <span class="game-status">{{ tournament.game_name }}</span>
    <div class="games-main gap-1 mt-4">
      <Tournament-card
        v-for="(event, index) in tournament.events"
        :key="index"
        :competition="event"
      />
    </div>
  </div>
</template>

<script>
import TournamentCard from "./tournament-card.vue";

export default {
  props: ["tournament"],

  components: { TournamentCard },
};
</script>

<style lang="scss" scoped>
.game-status {
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--color-primary);
  padding: 10px 15px;
  border-radius: 10px;
}

.games-main {
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-around;
    justify-content: flex-end;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>