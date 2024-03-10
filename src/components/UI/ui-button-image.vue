<script setup lang="ts">

</script>

<template>
  <button class="button">
    <slot class="slot"></slot>
  </button>
</template>

<style scoped lang="scss">
  .button {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background-color: #f5dce3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease .2s;
    box-shadow: 0px 4px 1px 1px rgb(194, 194, 194);

    &:hover {
      transform: scale(0.96);
      box-shadow: 0px 1px 1px 1px rgb(194, 194, 194);
    }
  }

  .slot{
    width: 100%;
    height: 100%;
  }
</style>
