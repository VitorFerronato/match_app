<template>
  <div>
    <Game-header-info :tournament="tournament" />
    <Game-info-main :tournament="tournament" />
  </div>
</template>

<script>
import GameHeaderInfo from "./game-header-info.vue";
import GameInfoMain from "./game-info-body/game-info-main.vue";
import service from "@/service/tournaments.js";
const Service = new service();
export default {
  name: "game-main",
  components: { GameHeaderInfo, GameInfoMain },
  data() {
    return {
      isLoading: false,
      id: null,
      tournament: null,
    };
  },

  methods: {
    async getTournament(id) {
      this.isLoading = true;

      try {
        let response = await Service.getTournamentById(id);
        console.log('resposta getTournamentById',response);
        this.tournament = response?.data ?? [];
      } catch (error) {
        console.log(error);
        this.$store.commit("snackbar/set", {
          message: "Erro ao busca torneio",
          type: "error",
        });
      }

      this.isLoading = false;
    },
  },

  created() {
    this.id = this.$route.params.id;

    if (this.id) this.getTournament(this.id);
  },
};
</script>

<style>
</style>