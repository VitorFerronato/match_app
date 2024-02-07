<template>
  <div class="sidebar-main">
    <router-link v-for="item in items" :key="item.id" :to="item.href" class="square">
      <!-- Conteúdo do item, se necessário -->
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          href: "/login"
        }
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