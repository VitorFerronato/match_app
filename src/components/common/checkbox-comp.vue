<template>
  <div class="checkbox-main">
    <input type="checkbox" id="topCheck" name="topCheck" />
    <label for="topCheck">Mantenha-me conectado</label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.checkbox-main {
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  label {
    font-size: 12px;
    cursor: pointer;
    margin-top: 2px;
    color: var(--color-text);
  }
}

input[type="checkbox"] {
  -webkit-appearance: none; 
  -moz-appearance: none; 
  appearance: none; 
  background-color: #282828; 
  border: 2px solid #4149A6; 
  padding: 6px; 
  border-radius: 3px; 
}

input[type="checkbox"]:checked {
  background-color: #4149A6; 
}

input[type="checkbox"]:focus {
  outline: none; 
}



</style>