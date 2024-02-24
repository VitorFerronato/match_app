<template>
  <div>
    <v-tabs v-model="tab" class="tab-border" slider-color="#7578C7">
      <v-tab value="geral-vision" class="px-0">Visão geral</v-tab>
      <v-tab value="key">Chave</v-tab>
      <v-tab value="matches">Partidas</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="geral-vision">
        <Geral-vision-main />
      </v-window-item>
      <v-window-item value="two"> two </v-window-item>
      <v-window-item value="matches"> <Matches-main /> </v-window-item>
    </v-window>
  </div>
</template>

<script>
import GeralVisionMain from "./components/geral-vision/geral-vision-main.vue";
import MatchesMain from "./components/matches/matches-main.vue";

export default {
  components: { GeralVisionMain, MatchesMain },
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-border {
  border-bottom: 1px solid rgba(151, 146, 146, 0.459);
}
.v-tab {
  color: white !important;
}
</style>