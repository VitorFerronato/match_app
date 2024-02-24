<template>
  <div id="game-main">
    <Progress-circular v-if="isLoading" :size="60" class="loading" />
    <div v-else>
      <Game-header-info :tournament="tournament" />
      <Game-info-main :tournament="tournament" />
    </div>
  </div>
</template>

<script>
import GameHeaderInfo from "./tournament-header-info.vue";
import GameInfoMain from "./tournament-info-body/tournament-info-main.vue";
import service from "@/service/tournaments.js";
import ProgressCircular from "@/components/common/progress-circular.vue";
const Service = new service();
export default {
  name: "game-main",
  components: { GameHeaderInfo, GameInfoMain, ProgressCircular },
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
        console.log("resposta getTournamentById", response);
        this.tournament = response?.data[0] ?? [];
        this.$store.commit("setTournament", this.tournament);
      } catch (error) {
        console.log(error);
        this.$store.commit("snackbar/set", {
          message: "Erro ao busca torneio",
          type: "error",
        });
        this.$router.push("/");
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

<style lang='scss' scoped>
#game-main {
  .loading {
    text-align: center;
    padding-top: 4rem;
  }
}
</style>