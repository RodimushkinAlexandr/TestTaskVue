<script setup lang="ts">
import { computed } from 'vue';
import Answer from './Answer.vue';
import uiButton from '../UI/ui-button.vue';

const props = defineProps<{
  answers: string[]
  answer: string
}>()

const emit = defineEmits<{
  (e: "update:answer", value: string): void
  (e: "check-win") :void
}>()

const selectedAnswer = computed({
  get() {
    return props.answer
  },
  set(answer: string): void {
    emit('update:answer', answer)
  }
})


</script>

<template>
  <form @submit.prevent class="answer-controls">
    <answer v-for="(item, index) of answers" v-model:selectedAnswer="selectedAnswer" 
              :answer="item" :key="item" :tabindex="index + 1"></answer> 
    <ui-button @click="emit('check-win')">Check</ui-button>
  </form>
</template>

<style scoped lang="scss">
  .answer-controls{
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.15);
    padding: 15px;
  }
</style>
