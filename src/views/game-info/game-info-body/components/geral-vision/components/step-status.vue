<template>
  <div class="step-grow">
    <div class="progression mb-2 pr-4">
      <div class="square-checked"><span v-show="actualStep">V</span></div>
      <div class="line" :class="{lineMarked: actualStep}"></div>
    </div>

    <p class="text-white font-22 mb-2">{{ title }}</p>
    <p class="text-white-secondary font-12">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    actualStep: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.step-grow {
  flex-grow: 1;
  .progression {
    display: flex;
    align-items: center;
    .line {
      flex-grow: 1;
      width: 20px;
      height: 3px; 
      background-color: #1F1F23;
    }

    .lineMarked {
      background-color: var(--color-primary);
    }

    .square-checked {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      border: 1px solid #2f2f2f;
      border-radius: 5px;
      span {
        font-size: 20px;
        color: var(--color-primary);
      }
    }
  }
}
</style>