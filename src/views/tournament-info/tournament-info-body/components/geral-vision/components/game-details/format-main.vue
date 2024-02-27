<template>
  <div class="card-info check-in">
    <p class="text-white">Formato</p>
    <div class="flex-center mt-4">
      <div class="square"></div>
      <div class="text-white ml-4">
        <p>ELIMINAÇÃO SIMPLES</p>
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