<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { TaskStore } from '../stores/Task';
import { UserStore } from '../stores/User';
import uiBackgroundGradient from '../components/UI/ui-background-gradient.vue';
import uiImageStatic from '../components//UI/ui-image-static.vue';
import ControlsTask from '../components/Task/ControlsTask.vue';
import UserScore from '../components/Task/UserScore.vue';
import AnswerControls from '../components/Task/AnswerControls.vue';
import uiPopupWindow from '../components/UI/ui-popup-window.vue';

const useStoreTask = TaskStore()
const useUserStore = UserStore()

onMounted(() => {
   useStoreTask.getNewTask()
})

const task = computed(() => useStoreTask.getTask)
const answer = ref<string>('')
const isShowPopup = ref<boolean>(false) 
const contentPopup = ref<string>('')

const onResetTask = () => {
  answer.value = ''
}

const onOpenPopup = () => {
  isShowPopup.value = true
}

const checkWin = () => {
  if (answer.value === task?.value?.correct_answer) {
    contentPopup.value = 'The answer is correct, Well done :)'
  } else {
    contentPopup.value = 'The answer is wrong, try again :('
  }

  isShowPopup.value = true
  answer.value = ''
}

const onClosePopup = () => {
  isShowPopup.value = false
  contentPopup.value = ''
}

</script>

<template>
  <div class="task">
    <div v-if="task !== null" class="container">
      <ui-background-gradient></ui-background-gradient>
      <controls-task @open-popup="onOpenPopup" @reset-task="onResetTask" class="task__controls"></controls-task>
      <user-score :user="useUserStore.user" class="task__score"></user-score>
      <main class="task__main main-task">
        <h3 class="main-task__condition">{{ task.task_conditions }}</h3>
        <h3 class="main-task__text">{{ task.task_text}}</h3>
          <ui-image-static :icon="task.task_image" class="main-task__challenge"></ui-image-static>
        <answer-controls v-model:answer="answer" :answers="task.answer_options" class="main-task__options" @check-win="checkWin"></answer-controls>
      </main>
    </div>
  </div>
  <ui-popup-window :show="isShowPopup" @close-popup="onClosePopup">{{ contentPopup }}</ui-popup-window>
</template>

<style scoped lang="scss">

.task {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  &__controls {
    top: 150px;
  }

  &__score {
    top: 50px;
    justify-content: flex-end;
  }
}

.main-task{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 160px;
  font-size: 18px;
  min-height: 100%;

  &__condition {
    margin-bottom: 30px;
  }

  &__options {
    bottom: 0;
  }

  &__text {
    margin-bottom: 120px;
  }

  @media (max-width: 400px) {
    &__challenge {
      max-width: 500px;
    }
  }
}
</style>
