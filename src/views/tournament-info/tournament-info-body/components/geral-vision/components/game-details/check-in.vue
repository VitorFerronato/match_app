<template>
  <div class="card-info check-in">
    <p class="text-white">Período de Check-In</p>
    <div class="flex-center mt-4">
      <div class="square"></div>
      <div class="text-white ml-4">
        <p class="font-18">45 Minutos</p>
        <p class="text-white-secondary font-12">Antes de iniciar o campeonato</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.check-in {
  flex-grow: 1;
  .square {
    width: 40px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 8px;
  }
}
</style>