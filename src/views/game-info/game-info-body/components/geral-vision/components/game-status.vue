<template>
  <div class="game-status-main">
    <span class="text-white">Status</span>
    <div class="step-status mt-2">
      <Step-status
        :title="'Inscrições'"
        :subtitle="'Inscrições abertas. Não perca tempo!'"
        :actualStep="true"
      />
      <Step-status
        :title="'Período de check-in'"
        :subtitle="'Confirme a sua participação para garantir a sua vaga no torneio.'"
        :actualStep="true"
      />
      <Step-status
        :title="'Chaveamento'"
        :subtitle="'As partidas iniciais são chaveadas e preparadas para o início do torneio.'"
        :actualStep="true"
      />
      <Step-status
        :title="'Iniciar'"
        :subtitle="'O torneio começou.'"
        :actualStep="false"
      />
      <Step-status
        :title="'Concluído'"
        :subtitle="'Torneio concluído.'"
        :actualStep="false"
      />
      <div class="champion-square mt-n4">
        <div class="square"></div>
        <p class="text-white">Campeão</p>
      </div>
    </div>
  </div>
</template>

<script>
import StepStatus from "./step-status.vue";

export default {
  components: { StepStatus },
};
</script>

<style lang="scss" scoped>
.champion-square {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.square {
  width: 70px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
}
.game-status-main {
  background-color: #1b1b1b;
  border-radius: 15px;
  padding: 12px;

  .step-status {
    display: flex;
    align-items: center;
  }
}
</style>