<script setup lang="ts">
import { ref, watch } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputMask from 'primevue/inputmask'

import { useTimerStore } from '@/modules/timer/store/useTimerStore'
const { duration, isActive, stopTimer, toggleTimer } = useTimerStore()

watch(
  () => duration.value,
  (duration) => {
    getTimeFormatted(duration)
  },
)
const time = ref()
const getTimeFormatted = (duration: number) => {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = Math.floor(duration % 60)
  time.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
</script>

<template>
  <Card>
    <template #title>
      <InputMask id="timer" type="text" mask="99:99:99" v-model="time" placeholder="00:00:00" />
    </template>
    <template #content>
      <div class="flex justify-between">
        <Button :label="isActive ? 'Pause' : 'Start'" @click="toggleTimer()" />
        <Button label="Stop" @click="stopTimer()" />
      </div>
    </template>
  </Card>
</template>
