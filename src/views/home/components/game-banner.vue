<template>
  <div class="main-banner">
    <div class="game-banner r6 max-width half-width">
      <p>Rainbow Six Siege</p>
    </div>

    <div class="right-games">
      <div class="dsgn-flex gap-1">
        <div class="game-banner ea-fc min-width">
          <p>EA FC</p>
        </div>

        <div class="game-banner pubg min-width">
          <p>PUBG</p>
        </div>
      </div>

      <div class="dsgn-flex gap-1">
        <div class="game-banner cs min-width">
          <p>CS 2</p>
        </div>

        <div class="game-banner vava min-width">
          <p>VALORANT</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-banner {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: var(--header-height);

  .game-banner {
    height: 100%;
    border-radius: 15px;
    background-size: cover;
    position: relative;
    box-shadow: inset 0 -100px 30px -30px rgba(0, 0, 0, 0.767);

  }

  .right-games {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 1rem;
  }

  .half-width {
    width: 50%;
  }

  .r6 {
    background: url("../../../assets/games_img/r6.jpg") no-repeat center center;
  }

  .ea-fc {
    background: url("../../../assets/games_img/ea-fc.png") no-repeat center
      center;
  }

  .pubg {
    background: url("../../../assets/games_img/pubg.jpg") no-repeat center
      center;
  }

  .cs {
    background: url("../../../assets/games_img/cs.png") no-repeat center center;
  }

  .vava {
    background: url("../../../assets/games_img/valorant.jpg") no-repeat center
      center;
  }
  .max-width {
    width: 900px;
    height: 370px;
  }

  .min-width {
    width: 450px;
    height: 190px;
  }

  .game-banner p {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-size: 24px;
    font-family: var(--font-family-base);
    margin: 0;
  }
}
</style>