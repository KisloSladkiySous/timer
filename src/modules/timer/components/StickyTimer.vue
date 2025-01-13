<script setup lang="ts">
import { ref, watch } from 'vue'
import Card from 'primevue/card'

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
  { deep: true, immediate: true },
)
</script>

<template>
  <Card class="absolute bottom-0 mb-4">
    <template #content>
      <div class="flex gap-4 items-center justify-between">
        <div class="mr-12" v-if="currentTimer">
          <span>{{ currentTimer.title }}</span>
        </div>
        <span v-if="time">{{ time }}</span>
        <PlayButton :active="!!activeTimeEntry.interval" @click="startTimer()" />
      </div>
    </template>
  </Card>
</template>
