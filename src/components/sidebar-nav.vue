<template>
  <div class="sidebar-main">
    <div v-for="item in items" :key="item.id" class="square"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--sidebar-width);
  height: 100%;
  padding: 10px 0;
  margin-top: var(--header-height);
  position: fixed;
  left: 0;
  background-image: linear-gradient(to top, #1b1b1b, #111111);
}
.square {
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  margin-top: 18px;
}
</style>