<template>
  <div class="card-info rules" :class="{ 'scrollable': isScrollable }">
    <p class="text-white">Regras</p>
    <p
      v-for="(rule, index) in rules"
      :key="index"
      class="text-white-secondary mb-1"
    >
      {{ rule }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        "1 tactical timeout of 45 seconds per team per map (to be set up server-side so players can easily request it themselves) ",
        "Ping limit: 120 (regional exception may apply at the admins discretion)",
        "Any in-game issue that requires admin intervention needs to be brought in a Discord ticket immediately",
        "Any ticket opened on Discord related to rule breaching should be accompanied by tournament related evidence, or will be disregarded and closed by the admin team",
        "Any abuse of the ticketing system will be sanctioned (eg.: reporting skins because of a loss after a match)",
        "Matcheswill not be delayed for any reason except for force majeure cases (i.e.worldwide server issues) and at the discretion of the admin team",
        "Players may stream their POV with a minimum of 180s delay",
     
      ],
    };
  },
  // computed: {
  //   isScrollable() {
  //     const element = document.querySelector('.card-info');
  //     return element.scrollHeight > element.clientHeight;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.rules {
  width: 40%;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 4px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; 
    border-radius: 8px; 
  }

  &::-webkit-scrollbar-track:hover {
    background-color: #AEAEAE; 
  }
}
.scrollable {
  overflow-y: scroll; 
}
</style>