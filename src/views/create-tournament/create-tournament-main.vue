<template>
  <div id="create-game">
    <div class="game-info">
      <!-- FIRST CARD -->
      <div class="game-inputs card-info">
        <h4 class="text-white font-24">Campeonato</h4>
        <p class="text-white-secondary font-18">Informações básicas</p>

        <v-text-field
          v-model="gameName"
          label="Nome"
          base-color="white"
          bg-color="#252525"
          hide-details
          class="mt-4"
        ></v-text-field>

        <v-row no-gutters justify="space-between" class="gap-1 mt-4">
          <v-combobox
            v-model="selectedGame"
            :items="gameItems"
            label="Jogo"
            base-color="white"
            bg-color="#252525"
            hide-details
          ></v-combobox>
          <v-combobox
            v-model="selectedPlataform"
            :items="plataformItems"
            label="Plataforma"
            base-color="white"
            bg-color="#252525"
            hide-details
          ></v-combobox>
        </v-row>

        <v-row no-gutters justify="space-between" class="gap-1 mt-4"> </v-row>
      </div>
      <div class="game-warnings"></div>
    </div>

    <!-- SECOND CARD -->
    <div class="game-award">
      <div class="award-inputs"></div>
      <div class="award-warnings"></div>
    </div>

    <!-- THIRDY CARD -->
    <div class="game-payment">
      <div class="game-inputs"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "create-tournament-main",
  data() {
    return {
      gameName: null,

      selectedGame: null,
      gameItems: [
        {
          text: "algo",
        },
      ],

      selectedPlataform: null,
      plataformItems: [
        {
          description: "Algo",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#create-game {
  display: flex;
  padding-top: calc(var(--header-height) + 1rem);

  gap: 1rem;

  .game-info {
    width: 60%;
    height: 31rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .game-inputs {
      height: 80%;
    }

    .game-warnings {
      height: 20%;
      border: 2px solid grey;
    }
  }

  .game-award {
    width: 25%;
    border: 1px solid grey;
  }

  .game-payment {
    width: 15%;
    border: 1px solid grey;
  }
}
</style>