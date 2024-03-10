<script setup lang="ts">

defineProps<{
    show: boolean
}>()

const emit = defineEmits<{
    (e: 'close-popup'): void
}>()

const hideDialog = () => {
    emit('close-popup')
}

</script>

<template>
    <transition name="dialog">
        <div class="dialog" v-if="show" @click="hideDialog">
            <div @click.stop class="dialog__list">
                <slot></slot>
                <div class="top_close" aria-label="Close popup" @click="hideDialog">+</div>
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.71);
    z-index: 100;
    display: flex;
    padding: 0px 10px;

    &__list {
        margin: auto;
        background-color: #727272;
        border-radius: 15px;
        min-height: 70px;
        min-width: 300px;
        padding: 28px 10px 0px 10px;
        position: relative;

        .top_close{
            position: absolute;
            top: 9px;
            right: 14px;
            cursor: pointer;
            transition: all ease-in-out .3s;
            transform: rotate(45deg) scale(2);

            &:hover{
                color: red;
            }
        }
    }
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all .25s ease;
}
</style>