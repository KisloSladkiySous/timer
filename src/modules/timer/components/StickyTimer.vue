<script setup lang="ts">
import { ref, watch } from 'vue'

import { useTimerStore } from '@/modules/timer/store/useTimerStore'
import PlayButton from './PlayButton.vue'
const { activeTimeEntry, stopTimer, startTimer, currentTimer } = useTimerStore()

const time = ref()
const getTimeFormatted = (duration: number) => {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = Math.floor(duration % 60)
  time.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

watch(
  () => activeTimeEntry.value.duration,
  (duration) => {
    getTimeFormatted(duration)
  },
  { deep: true },
)

const start = () => {
  startTimer()
  getTimeFormatted(activeTimeEntry.value.duration)
}
</script>

<template>
  <div
    class="bg-zinc-950 absolute bottom-0 left-[50%] translate-x-[-50%] ml-[100px] mb-6 p-4 rounded-2xl border-zinc-800 border transition-[width] duration-300"
  >
    <div class="flex gap-4 items-center justify-between transition-[width] duration-300">
      <span class="mr-12" v-if="currentTimer">{{ currentTimer.title }}</span>
      <span v-if="time">{{ time }}</span>
      <PlayButton :active="!!activeTimeEntry.interval" @click="start" />
    </div>
  </div>
</template>
