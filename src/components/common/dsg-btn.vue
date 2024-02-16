<template>
  <v-btn
    class="buttom"
    :class="outlined ? '' : 'white--text'"
    :disabled="disabled"
    :small="small"
    :color="color"
    :outlined="outlined"
    :loading="loading"
    @click="$emit('click', $event)"
  >
    <slot name="title">
      <span>{{ title }}</span>
    </slot>
    <slot name="icon-after"></slot>
  </v-btn>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    small: {
      type: Boolean,
    },
    color: {
      type: String,
      default: "#7578C7",
    },
    iconColor: {
      type: String,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.buttom {
  align-items: center;
  border-radius: 6px;
}
</style>