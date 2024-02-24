<template>
  <div class="mt-4">
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <v-text-field
          variant="outlined solo"
          density="compact"
          single-line
          hide-details
          class="search mr-4"
        >
          <template v-slot:label>
            <span class="text-white font-bold"
              >"Nome do time" ou "Partida 10"</span
            >
          </template>
        </v-text-field>
      </v-col>
      <div>
        <Dsg-btn :title="'All'" class="mr-2" />
        <Dsg-btn :title="'Em andamento'" class="mr-2" />
        <Dsg-btn :title="'Agendado'" class="mr-2" />
        <Dsg-btn :title="'Jogado'" />
      </div>
    </v-row>

    <div class="matches mt-4">
      <Match-card />
      <Match-card />
      <Match-card />
      <Match-card />
      <Match-card />
    </div>
  </div>
</template>

<script>
import DsgBtn from "@/components/common/dsg-btn.vue";
import MatchCard from "./components/match-card.vue";
export default {
  components: {
    DsgBtn,
    MatchCard,
  },
};
</script>

<style 
lang="scss" scoped>
.search {
  background-color: #252525;
  border-radius: 8px;
}

.matches {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem
  
}
</style>