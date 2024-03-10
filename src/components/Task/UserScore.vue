<script setup lang="ts">
import { computed } from 'vue';
import type User from '../../types/User'

const props = defineProps<{
  user?: User | null
}>()

const defaultUser = {
  name: 'Username',
  score: 0,
};

const userInfo = computed(() => props.user ?? defaultUser)

</script>

<template>
    <div class="user-score">
      <div class="user-score__content">
        <h3 class="user-score__title">{{ userInfo.name }}</h3>
        <div class="user-score__wrapper-score"> 
          <p class="user-score__score">{{ userInfo.score }}</p>
          <img src="../../assets/img/coin.png" alt="coins" class="user-score__img">
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
  .user-score {
    position: absolute;
    display: flex;
    width: 100%;

    &__content {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }


    &__wrapper-score {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    &__img {
      width: 20px;
      height: 20px;
    }
  }
</style>
