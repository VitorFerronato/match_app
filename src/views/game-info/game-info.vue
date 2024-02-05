<template>
  <div class="main-game">
    <div>
      <div>
        <div class="square"></div>

        <div class="game-details">
          <div>
            <p class="pa-0 text-white">Nome do campeonato</p>
            <span>Data Hora</span>
            <span class="game-status">Aberto</span>
          </div>
          <Dsg-btn :color="'#5E62DB'"  :title="'Competir'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DsgBtn from "@/components/common/dsg-btn.vue";
export default {
  components: { DsgBtn },
  name: "game-info",
};
</script>

<style lang="scss" scoped>
.main-game {
  padding-top: calc(var(--header-height) + 2rem);

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
        align-items: center;
        width: 100%;

        > div {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .game-status {
          background-color: rgba(255, 255, 255, 0.205);
          color: var(--color-primary);
          padding: 10px 25px;
          width: min-content;
          border-radius: 10px;
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
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.205);
    border-radius: 8px;
    margin-right: 12px;
  }
}
</style>