<template>
  <div class="mb-10">
    <progress-circular v-if="isLoading" :size="60" />
    <div v-if="!isLoading && tournaments.length > 0">
      <Tournament-game
        v-for="tournament in tournaments"
        :key="tournament.id"
        :tournament="tournament"
      />
    </div>

    <h4
      v-if="tournaments.length <= 0 && !isLoading"
      class="text-h5 text-white text-center mt-6"
    >
      NENHUM TORNEIO ENCONTRADO
    </h4>
  </div>
</template>

<script>
import TournamentGame from "./components/tournament-game.vue";
import service from "@/service/tournaments.js";
import ProgressCircular from "@/components/common/progress-circular.vue";
const Service = new service();
export default {
  components: { TournamentGame, ProgressCircular },
  data() {
    return {
      isLoading: false,

      tournaments: [
        {
          id: 1,
          tournament_name: "Rainbow Six",
          events: [
            {
              eventName: "Premier Beta",
              awardPrice: 2577,
              registrationTax: 24,
              participantsTotal: 43,
              participantsLimit: 128,
              startDate: '2023-04-29T03:00:00.000Z',
              endDate: '2023-04-29T03:00:00.000Z',
              host: "Corsario_97",
            },
            {
              eventName: "Mundial",
              awardPrice: 1390,
              registrationTax: 21.98,
              participantsTotal: 22,
              participantsLimit: 50,
              startDate: '2023-04-29T03:00:00.000Z',
              endDate: '2023-04-29T03:00:00.000Z',

              host: "Roger that",
            },
            {
              eventName: "Copa cristão",
              awardPrice: 1390,
              registrationTax: 21.98,
              participantsTotal: 44,
              participantsLimit: 128,
              startDate: '2023-04-29T03:00:00.000Z',
              endDate: '2023-04-29T03:00:00.000Z',

              host: "Ferronitro",
            },
          ],
        },
        {
          id: 2,
          tournament_name: "VALORANT",
          events: [
            {
              eventName: "Premier Beta",
              awardPrice: 2578,
              registrationTax: 24,
              participantsTotal: 43,
              participantsLimit: 128,
              startDate: '2023-04-29T03:00:00.000Z',
              endDate: '2023-04-29T03:00:00.000Z',

              host: "Corsario_97",
            },
            {
              eventName: "Mundial",
              awardPrice: 1390,
              registrationTax: 21.98,
              participantsTotal: 22,
              participantsLimit: 50,
              startDate: '2023-04-29T03:00:00.000Z',
              endDate: '2023-04-29T03:00:00.000Z',

              host: "Roger that",
            },
            {
              eventName: "Copa cristão",
              awardPrice: 1390,
              registrationTax: 21.98,
              participantsTotal: 44,
              participantsLimit: 128,
              startDate: '2023-04-29T03:00:00.000Z',
              endDate: '2023-04-29T03:00:00.000Z',

              host: "Ferronitro",
            },
            {
              eventName: "Copa cristão",
              awardPrice: 1390,
              registrationTax: 21.98,
              participantsTotal: 44,
              participantsLimit: 128,
              startDate: '2023-04-29T03:00:00.000Z',
              endDate: '2023-04-29T03:00:00.000Z',

              host: "Ferronitro",
            },
          ],
        },
      ],
    };
  },
  methods: {
    async getTournaments() {
      this.isLoading = true;

      try {
        let response = await Service.getTournaments();
        console.log("getTournaments", response);
      } catch (error) {
        console.log(error);
      }

      this.isLoading = false;
    },
  },

  created() {
    this.getTournaments();
  },
};
</script>
