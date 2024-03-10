<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  answer: string;
  selectedAnswer: string;
}>();

const emit = defineEmits<{
    (e: 'update:selectedAnswer', value: string): void
}>()

const updateAnswer = () => {
    emit('update:selectedAnswer', props.answer)
}

const selected = computed(() =>  props.answer === props.selectedAnswer)
</script>

<template>
    <div class="form_radio_btn">
        <input :id="answer" :value="answer" type="radio" name="radio" @change.exact="updateAnswer">
        <label :for="answer" :class="{checked : selected}">
            <slot>{{ answer }}</slot>
        </label>
    </div>
</template>

<style scoped lang="scss">

.form_radio_btn {
    width: 100%;
    transition: all ease .3s;
    
    &:hover {
        transform: scale(0.98);
        box-shadow: 0px 1px 1px 1px rgb(194, 194, 194);
    }
    
    input[type=radio] {
        display: none;
    }

    label {
        cursor: pointer;
        padding: 10px 0px;
        border-radius: 6px;
        user-select: none;
        font-size: 22px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0px 4px 1px 1px rgb(194, 194, 194);
        transition: all .3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        
        &.checked {
            background-color: rgba(0, 0, 0, 0.2);
            box-shadow: none;
        }
    }
    
    label:hover {
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: none;
    }
}
    
</style>
