<template>
  <div class="match-card text-white pa-2">
    <div class="match-details">
      <div>
        <p class="font-22 mb-2">Partida 1</p>
        <span class="game-status">Aguardando</span>
      </div>
    </div>

    <div class="match-details">
      <p class="font-14 text-white-secondary">24/15/2023</p>
    </div>

    <div class="match-teams">
      <div class="team">
        <div class="team-name">
          <div class="square"></div>
          <p>Corsário_27</p>
        </div>

        <div class="square-number"><span>0</span></div>
      </div>

      <div class="team">
        <div class="team-name">
          <div class="square"></div>
          <p>Corsário_27</p>
        </div>

        <div class="square-number"><span>0</span></div>
      </div>
    </div>

    <div class="match-champion">
      <div class="square-img"></div>
      <p class="mt-2">VENCEDOR</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.match-card {
  background-color: #252525;
  border-radius: 10px;
  width: calc(50% - 0.5rem);
  display: flex;
  align-items: center;

  > div {
    border-right: 1px solid #aeaeae2a;
    height: 100%;
    padding-right: 0.8rem;
    padding-left: 0.8rem;
  }
  > div:nth-child(4) {
    border-right: none;
  }

  .match-details {
    display: flex;
    justify-content: center;
    align-items: center;
    .game-status {
      background-color: rgba(255, 255, 255, 0.205);
      color: var(--color-primary);
      padding: 10px 25px;
      width: min-content;
      border-radius: 10px;
      font-size: 16px;
    }
  }

  .match-teams {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;

    .team {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #aeaeae2a;

      .team-name {
        display: flex;
        align-items: center;
      }
    }
  }

  > .match-champion {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.square {
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 5px;
  margin-right: 12px;
}
.square-number {
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.square-img {
  width: 55px;
  height: 55px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 5px;
}
</style>