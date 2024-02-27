<template>
  <div class="mt-4">
    <Game-status />

    <div class="game-details gap-1 my-4">
      <Award-main />
      <div class="div-middle">
        <Check-in />
        <Format-main />
        <Participants-main />
      </div>
      <Teams-main />
      <Rules-main />
    </div>
  </div>
</template>

<script>
import AwardMain from "./components/game-details/award-main.vue";
import CheckIn from "./components/game-details/check-in.vue";
import FormatMain from "./components/game-details/format-main.vue";
import ParticipantsMain from "./components/game-details/participants-main.vue";
import RulesMain from './components/game-details/rules-main.vue';
import TeamsMain from "./components/game-details/teams-main.vue";
import GameStatus from "./components/game-status/game-status.vue";

export default {
  components: {
    GameStatus,
    AwardMain,
    CheckIn,
    FormatMain,
    ParticipantsMain,
    TeamsMain,
    RulesMain
  },
};
</script>,
    

<style lang="scss" scoped>
.game-details {
  display: flex;
  height: 400px;

  .div-middle {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 20%;
  }
}
</style>