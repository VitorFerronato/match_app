<template>
  <div class="card-info main-size">
    <p class="text-white">Premiação</p>

    <div
      v-for="(award, index) in awards"
      :key="index"
      class="flex-center mb-2 pb-2"
    >
      <div v-show="index == 0" class="square"></div>
      <p class="text-white ml-4" :class="{ mainFont: index == 0 }">
        <span v-show="index !== 0" class="mr-8">{{ index }}°</span>
        <span>{{ formatMonetary(award) }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { formatMonetary } from "@/utils/format-money.js";
export default {
  data() {
    return {
      awards: [2500, 1500, 500, 100, 35, 0],
    };
  },
  methods: {
    formatMonetary,
  },
};
</script>

<style lang="scss" scoped>
.main-size {
  width: 20%;
  .mainFont {
    font-size: 24px;
  }
  > div {
    border-bottom: 1px solid #252525;
  }

  .square {
    width: 40px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 8px;
  }
}
</style>