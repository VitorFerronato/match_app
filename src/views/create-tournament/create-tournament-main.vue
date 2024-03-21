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

        <v-row no-gutters justify="space-between" class="mt-2">
          <v-combobox
            v-model="selectedGame"
            :items="gameItems"
            item-title="text"
            menu-icon="mdi-chevron-down"
            label="Jogo"
            base-color="white"
            bg-color="#252525"
            hide-details
            class="mr-2"
          ></v-combobox>
          <v-combobox
            v-model="selectedPlataform"
            :items="plataformItems"
            item-title="text"
            menu-icon="mdi-chevron-down"
            label="Plataforma"
            base-color="white"
            bg-color="#252525"
            hide-details
          ></v-combobox>
        </v-row>

        <v-row no-gutters justify="space-between" class="mt-2">
          <v-col class="mr-2">
            <v-combobox
              v-model="selectedFormat"
              :items="formatItems"
              item-title="text"
              menu-icon="mdi-chevron-down"
              label="Formato"
              base-color="white"
              bg-color="#252525"
              hide-details
              class="mb-2"
            ></v-combobox>
            <div>
              <span class="text-white-secondary"> {{ formatDescription }}</span>
            </div>
          </v-col>
          <v-col>
            <v-combobox
              v-model="inscriptionLimit"
              :items="inscriptionItems"
              menu-icon="mdi-chevron-down"
              label="Limite de inscrição"
              base-color="white"
              bg-color="#252525"
              hide-details
              class="mb-2"
            ></v-combobox>
            <v-combobox
              v-model="timeCheckIn"
              :items="timeCheckInItems"
              menu-icon="mdi-chevron-down"
              label="Check-in"
              base-color="white"
              bg-color="#252525"
              hide-details
              class="mb-2"
            ></v-combobox>
            <v-row no-gutters>
              <v-text-field
                v-model="initGame"
                label="Data inicio"
                base-color="white"
                bg-color="#252525"
                hide-details
                class="mr-2"
              ></v-text-field>
              <v-text-field
                v-model="endGame"
                label="Data fim"
                base-color="white"
                bg-color="#252525"
                hide-details
              ></v-text-field>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="game-warnings">
        <div class="game-warning-box pa-2">
          <label>Taxa da inscrição do campeonato</label>
          <div class="mt-4 flex-center">
            <span class="font-28 tax-register mr-2">6%</span>
            <span class="font-12 text-white-secondary"
              >Taxa de organização e segurança</span
            >
          </div>
        </div>
        <div class="game-warning-box pa-2">
          <label>Comissão</label>
          <div class="mt-4 flex-center">
            <span class="font-28 commission mr-2">14%</span>
            <span class="font-12 text-white-secondary"
              >da premiação é do criador</span
            >
          </div>
        </div>
        <div class="game-warning-box pa-2">
          <label>Premiação</label>
          <div class="mt-4 flex-center">
            <span class="font-28 price mr-2">80%</span>
            <span class="font-12 text-white-secondary"
              >Destinado a premiação</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- SECOND CARD -->
    <div class="game-award card-info">
      <div class="award-inputs">
        <h4 class="text-white font-24">Campeonato</h4>
        <p class="text-white-secondary font-18">Premiação</p>

        <div class="game-award-box pa-2 mt-4">
          <label class="text-white-secondary mb-2">Premiação total</label>
          <p class="text-white font-18 ma-0 pa-0">R$ 2.500,00</p>
        </div>

        <div class="game-award-box pa-2 mt-2">
          <label class="text-white-secondary mb-2"
            >Quantidade de times premiados</label
          >
          <v-slider
            v-model="value"
            :max="128"
            :min="2"
            :step="1"
            hide-details
            thumb-label
          >
            <template v-slot:prepend>
              <span class="text-white">2</span>
            </template>
            <template v-slot:append>
              <span class="text-white">128</span>
            </template>
          </v-slider>
        </div>

        <div class="game-award-box pa-2 mt-2">
          <p class="text-white-secondary">Premiação</p>

          <div
            v-for="(award, index) in awards"
            :key="index"
            class="flex-center pb-2"
          >
            <div v-show="index == 0" class="square"></div>
            <p class="text-white ml-4" :class="{ mainFont: index == 0 }">
              <span v-show="index !== 0" class="mr-8">{{ index }}°</span>
              <span>{{ formatMonetary(award) }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="award-warnings"></div>
    </div>

    <!-- THIRDY CARD -->
    <div class="game-payment card-info">
      <div class="game-inputs">
        <h4 class="text-white font-24">Pagamento</h4>
        <div class="payment-box">
          <div class="game-award-box pa-2 mt-4">
            <label class="text-white-secondary mb-2">Taxa criação</label>
            <p class="text-white font-18 ma-0 pa-0">R$ 150,00</p>
          </div>
          <Dsg-btn :title="'Criar'" :isGradient="true" @click="createGame" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatMonetary } from "@/utils/format-money.js";
import DsgBtn from "@/components/common/dsg-btn.vue";

export default {
  components: { DsgBtn },
  name: "create-tournament-main",
  data() {
    return {
      gameName: null,
      selectedGame: null,
      selectedPlataform: null,
      selectedFormat: null,
      inscriptionLimit: null,
      timeCheckIn: null,
      initGame: null,
      endGame: null,

      value: 2,
      awards: [2500, 1500, 500, 100, 35, 0],

      gameItems: [
        {
          text: "Valorant",
        },
        {
          text: "Rainbom six siege",
        },
        {
          text: "CS",
        },
        {
          text: "PUB G",
        },
        {
          text: "EA FC",
        },
      ],
      plataformItems: [
        {
          text: "PC",
        },
        {
          text: "Console",
        },
      ],
      formatItems: [
        {
          text: "Eliminação Simples",
          description:
            "Neste formato, os competidores são emparelhados em confrontos diretos, e o perdedor de cada confronto é eliminado. Isso continua até que reste apenas um vencedor.",
        },
        {
          text: "Liga ou Round Robin",
          description:
            "Cada competidor enfrenta todos os outros competidores em uma série de partidas. Pontos são atribuídos para vitórias, empates ou derrotas, e a classificação é baseada no desempenho ao longo de todos os jogos.",
        },
        {
          text: "Eliminação Dupla",
          description:
            "Similar ao torneio de eliminação simples, mas os competidores têm duas chances de continuar na competição. Eles precisam perder duas vezes para serem eliminados.",
        },
        {
          text: "Torneio de Grupos",
          description:
            "Competidores são divididos em grupos e jogam entre si dentro desses grupos. Os melhores de cada grupo avançam para uma fase de eliminação direta.",
        },
      ],
      inscriptionItems: [],
      timeCheckInItems: [],
    };
  },

  computed: {
    formatDescription() {
      return this.selectedFormat?.description ?? "";
    },
  },

  methods: {
    formatMonetary,

    createGame() {
      let request = {
        gameName: this.gameName,
        selectedGame: this.selectedGame,
        selectedPlataform: this.selectedPlataform,
        selectedFormat: this.selectedFormat,
        inscriptionLimit: this.inscriptionLimit,
        timeCheckIn: this.timeCheckIn,
        initGame: this.initGame,
        endGame: this.endGame,
      };
      console.log(request);
    },
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
    height: 33rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .game-inputs {
      height: 80%;
    }

    .game-warnings {
      height: 20%;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .game-warning-box {
        background-color: #252525;
        color: white;
        height: 100%;
        border-radius: 10px;
        font-size: 14px;

        .tax-register {
          color: #aeaeae;
          font-weight: 600;
        }

        .commission {
          color: #75c782;
          font-weight: 600;
        }

        .price {
          color: #5e62db;
          font-weight: 600;
        }
      }

      .game-warning-box:nth-child(2) {
        flex-grow: 1;
      }
    }
  }

  .game-award {
    width: 25%;
  }

  .game-payment {
    width: 15%;

    .game-inputs {
      height: 100%;
      .payment-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 90%;
      }
    }
  }
}
.game-award-box {
  background-color: #252525;
  border-radius: 10px;
}
.square {
  width: 40px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
}
</style>