<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps(['icon'])

const imgSrc = computed(() => {
  return new URL(`../../assets/img/${props.icon}`, import.meta.url).href
})
</script>

<template>
  <img :src="imgSrc" />
</template>