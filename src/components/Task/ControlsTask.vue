<script setup lang="ts">
import uiButtonImage from '../UI/ui-button-image.vue';

const emit = defineEmits<{
  (e: "reset-task"): void
  (e: "open-popup"):void
}>() 

</script>

<template>
    <article class="task__controls">
      <ui-button-image @click="emit('reset-task')">
        <img src="../../assets/img/close_btn.png" alt="close">
     </ui-button-image>
     <ui-button-image @click="emit('open-popup')">
        <img src="../../assets/img/bulb_btn.png" alt="answer">
     </ui-button-image>
    </article>
</template>

<style scoped lang="scss">
  .task__controls {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 0px 5px;
    }
  }
</style>
