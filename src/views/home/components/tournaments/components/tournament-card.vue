<template>
  <div class="game-card">
    <div class="card-header px-4 pt-4">
      <div class="square"></div>

      <div>
        <p class="text-color mb-4">
          {{ formatDate(event.date_init) }} - {{ formatDate(event.date_end) }}
        </p>
        <p class="tournament-name font-bold mb-2">
          {{ event.tournament_name }}
        </p>
        <div>
          <span class="game-status mr-2">{{ event.format }}</span>
          <span class="game-status mr-2">PC</span>
        </div>
      </div>
    </div>

    <div class="card-body mt-2 px-4">
      <div class="dsgn-flex-between">
        <div class="dsgn-flex-column">
          <span class="text-white-secondary font-12">Premiação</span>
          <span class="text-white">{{ formatMonetary(event.prize_pool) }}</span>
        </div>
        <div class="dsgn-flex-column">
          <span class="text-white-secondary font-12">Taxa inscrição</span>
          <span class="text-white">{{
            formatMonetary(event.tax_participant)
          }}</span>
        </div>
        <div class="dsgn-flex-column">
          <span class="text-white-secondary font-12">Participantes</span>
          <span class="text-white"
            >{{ event.participants }}/{{ event.teams_limit }}</span
          >
        </div>
      </div>
    </div>
    <div class="card-footer dsgn-flex-between dsgn-align-center mt-4 px-4 py-2">
      <div class="footer-host dsgn-flex dsgn-align-center">
        <div class="footer-img mr-2"></div>

        <div class="dsgn-flex-column">
          <span class="text-white-secondary font-12">Organizado por</span>
          <span class="text-white">{{ event.owner_name }}</span>
        </div>
      </div>

      <v-btn :color="'#4149A6'">Competir</v-btn>
    </div>
  </div>
</template>

<script>
import { formatMonetary } from "@/utils/format-money.js";
import { formatDate } from "@/utils/format-date.js";
export default {
  props: ["event"],
  methods: {
    formatMonetary,
    formatDate,
  },
};
</script>

<style lang="scss" scoped>
.game-status {
  background-color: rgba(255, 255, 255, 0.08);
  color: var(--color-primary);
  padding: 10px 15px;
  border-radius: 10px;
  flex-grow: 1;
}

.square {
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  margin-right: 12px;
}

.game-card {
  background-color: rgba(21, 21, 21, 1);
  border-radius: 10px;

  .card-header {
    display: flex;
    padding-bottom: 1rem;
    border-bottom: 1px solid #1c1c1c;

    .text-color {
      color: var(--color-text);
    }

    .tournament-name {
      color: #fff;
    }
  }

  .card-footer {
    background-color: #252525;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .footer-host {
      .footer-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #d9d9d9;
      }
    }
  }
}
</style>