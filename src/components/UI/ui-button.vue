<script setup lang="ts">

</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  .button {
    min-height: 100%;
    border-radius: 12px;
    background-color: #e7eaf3;
    padding: 10px;
    font-size: 16px;
    box-shadow: 0px 4px 1px 1px rgb(194, 194, 194);
    transition: all ease .3s;

    &:hover {
      transform: scale(0.96);
      box-shadow: 0px 1px 1px 1px rgb(194, 194, 194);
    }
  }
</style>
