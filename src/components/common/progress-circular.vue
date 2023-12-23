<template>
  <v-row no-gutters justify="center" class="mt-10">
    <v-progress-circular
      indeterminate
      :color="color"
      :size="size"
    ></v-progress-circular>
  </v-row>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 35,
    },
    color: {
      type: String,
      default: "#7578C7",
    },
  },
};
</script>

<style>
</style>