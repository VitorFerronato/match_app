<template>
  <div class="card-info teams">
    <p class="text-white">Equipes</p>
    <div v-for="(team, index) in teams" :key="index" class="team flex-center mb-2 pb-2 mt-2">
      <div class="square mr-4"></div>
      <span class="text-white">{{ team }}</span>
      <v-spacer></v-spacer>
      <span class="text-white">...</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        "Corsário_27",
        "Corsário_27",
        "Corsário_27",
        "Corsário_27",
        "Corsário_27",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.teams {
  width: 20%;

  .team{
    border-bottom: 1px solid #252525;
  }

  .square {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 8px;
  }
}
</style>