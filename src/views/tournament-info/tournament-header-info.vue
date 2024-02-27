<template>
  <div class="main-game">
    <div>
      <div>
        <div class="square"></div>

        <div class="game-details">
          <div>
            <p class="pa-0 text-white">{{ tournamentName }}</p>
            <span class="date">{{ formatDate(dateInit) }}</span>
            <span class="game-status">{{ gameStatus }} </span>
          </div>
          <Dsg-btn :color="'#5E62DB'" :title="'Competir'" :isGradient="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/utils/format-date.js";
import DsgBtn from "@/components/common/dsg-btn.vue";
export default {
  props: ["tournament"],
  components: { DsgBtn },
  name: "game-info",

  computed: {
    tournamentName() {
      return this.tournament?.name ?? null;
    },

    dateInit() {
      return this.tournament?.date_init ?? null;
    },

    gameStatus() {
      return this.tournament?.open_inscription ? "Aberto" : "Fechado" ?? null;
    },
  },

  methods: {
    formatDate,
  },
};
</script>

<style lang="scss" scoped>
.main-game {
  > div {
    height: 300px;
    background: url("@/assets/games_img/r6.jpg") no-repeat center center;
    border-radius: 15px;
    box-shadow: inset 0 -240px 50px -30px rgba(0, 0, 0, 0.795);

    @media (max-width: 1200px) {
      height: 180px;
    }

    > div {
      display: flex;
      align-items: flex-end;
      height: 100%;
      padding: 1.7rem;

      .game-details {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;

        > div {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          .date {
            font-size: 16px;
          }
        }

        .game-status {
          background-color: rgba(255, 255, 255, 0.205);
          color: var(--color-primary);
          padding: 10px 25px;
          width: min-content;
          border-radius: 10px;
          font-size: 16px;
        }

        p {
          color: #fff;
          font-family: var(--font-family-secondary);
          font-size: 22px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        span {
          color: var(--color-text);
          font-family: var(--font-family-secondary);
          font-size: 9.7px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
      }
    }
  }

  .square {
    width: 110px;
    height: 110px;
    background-color: rgba(255, 255, 255, 0.205);
    border-radius: 8px;
    margin-right: 12px;
  }
}
</style>