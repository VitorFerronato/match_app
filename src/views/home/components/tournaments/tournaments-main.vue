<template>
  <div class="mb-10">
    <Tournament-game
      v-for="tournament in tournaments"
      :key="tournament.id"
      :tournament="tournament"
    />
  </div>
</template>

<script>
import TournamentGame from "./components/tournament-game.vue";

export default {
  components: { TournamentGame },
  data() {
    return {
      tournaments: [
        {
          id: 1,
          gameName: "Rainbow Six",
          events: [
            {
              eventName: "Premier Beta",
              awardPrice: 2577,
              registrationTax: 24,
              participantsTotal: 43,
              participantsLimit: 128,
              host: "Corsario_97",
            },
            {
              eventName: "Mundial",
              awardPrice: 1390,
              registrationTax: 21.98,
              participantsTotal: 22,
              participantsLimit: 50,
              host: "Roger that",
            },
            {
              eventName: "Copa cristão",
              awardPrice: 1390,
              registrationTax: 21.98,
              participantsTotal: 44,
              participantsLimit: 128,
              host: "Ferronitro",
            },
          ],
        },
        {
          id: 2,
          gameName: "VALORANT",
          events: [
            {
              eventName: "Premier Beta",
              awardPrice: 2578,
              registrationTax: 24,
              participantsTotal: 43,
              participantsLimit: 128,
              host: "Corsario_97",
            },
            {
              eventName: "Mundial",
              awardPrice: 1390,
              registrationTax: 21.98,
              participantsTotal: 22,
              participantsLimit: 50,
              host: "Roger that",
            },
            {
              eventName: "Copa cristão",
              awardPrice: 1390,
              registrationTax: 21.98,
              participantsTotal: 44,
              participantsLimit: 128,
              host: "Ferronitro",
            },
            {
              eventName: "Copa cristão",
              awardPrice: 1390,
              registrationTax: 21.98,
              participantsTotal: 44,
              participantsLimit: 128,
              host: "Ferronitro",
            },
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>
