<script setup lang="ts">
</script>

<template>
  <div class="lines-container">
  </div>
</template>

<style scoped lang="css">
.lines-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height:100%;
  background-image:repeating-linear-gradient(
      to right,
      #ffe5e5 0 5%,
      #fff 5% 8.7%
    );
}


</style>
