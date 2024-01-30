<template>
  <div class="mb-10">
    <Progress-circular v-if="isLoading" :size="60" />
    <div v-if="!isLoading && tournaments.length > 0">
      <Tournament-game
        v-for="(tournament, index) in tournaments"
        :key="index"
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
        // {
        //   game_name: "Rainbow Six Siege",
        //   events: [
        //     {
        //       id: "6399aac2-6390-4043-bea7-b229ff343d68",
        //       tournament_name: "unfolded-pace.biz",
        //       prize_pool: 618.84,
        //       tax_participant: 9.669375,
        //       participants: 10,
        //       teams_limit: 64,
        //       date_init: "2024-07-12T03:00:00.000Z",
        //       date_end: "2023-03-30T03:00:00.000Z",
        //       owner_name: "Tonya Conn",
        //     },
        //     {
        //       id: "asdsad-6390-4043-bea7-b229ff343d68",
        //       tournament_name: "unfolded-pace.biz",
        //       prize_pool: 618.84,
        //       tax_participant: 9.669375,
        //       participants: 10,
        //       teams_limit: 64,
        //       date_init: "2024-07-12T03:00:00.000Z",
        //       date_end: "2023-03-30T03:00:00.000Z",
        //       owner_name: "Tonya Conn",
        //     },
        //   ],
        // },
        // {
        //   game_name: "VALORANT",
        //   events: [
        //     {
        //       id: "6399aac2-6390-4043-asdas-b229ff343d68",
        //       tournament_name: "unfolded-pace.biz",
        //       prize_pool: 618.84,
        //       tax_participant: 9.669375,
        //       participants: 10,
        //       teams_limit: 64,
        //       date_init: "2024-07-12T03:00:00.000Z",
        //       date_end: "2023-03-30T03:00:00.000Z",
        //       owner_name: "Tonya Conn",
        //     },
        //   ],
        // },
        // {
        //   game_name: "CS2",
        //   events: [
        //     {
        //       id: "6399aac2-6390-4043-asdas-b229ff34ADA3d68",
        //       tournament_name: "unfolded-pace.biz",
        //       prize_pool: 618.84,
        //       tax_participant: 9.669375,
        //       participants: 10,
        //       teams_limit: 64,
        //       date_init: "2024-07-12T03:00:00.000Z",
        //       date_end: "2023-03-30T03:00:00.000Z",
        //       owner_name: "Tonya Conn",
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    async getTournaments() {
      this.isLoading = true;

      try {
        let response = await Service.getTournaments();
        this.tournaments = this.groupByGame(response?.data ?? []);
      } catch (error) {
        console.log(error);
        this.$store.commit("snackbar/set", {
          message: "Erro ao buscar torneios",
          type: "error",
        });
      }

      this.isLoading = false;
    },

    groupByGame(games) {
      const groupedGames = new Map();
      console.log(games)
      games.forEach((game) => {
        if (!groupedGames.has(game.name)) {
          groupedGames.set(game.name, {
            game_name: game.name,
            events: [],
          });
        }

        const gameData = groupedGames.get(game.name);
        gameData.events.push({
          id: game.id,
          tournament_name: game.description,
          prize_pool: game.prize_pool,
          tax_participant: game.tax_inscription,
          participants: parseInt(game.qtd_limit_participant, 10),
          teams_limit: game.limit_participant,
          date_init: game.date_init,
          date_end: game.date_end,
          owner_name: game.nickname,
          format: game.format,
        });
      });

      return Array.from(groupedGames.values());
    },
  },

  created() {
    this.getTournaments();
  },
};
</script>

<style lang="scss" scoped>

</style>
