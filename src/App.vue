<script setup lang="ts">
import MainTimer from '@/modules/timer/components/MainTimer.vue'
import Card from 'primevue/card'

import { useTimerStore } from '@/modules/timer/store/useTimerStore'
import { watch } from 'vue'
const { timers } = useTimerStore()

watch(timers, () => {
  console.log(timers.value)
})
</script>

<template>
  <div class="flex justify-center items-center h-screen flex-col gap-4">
    <Card v-for="timer in timers" :key="timer.start">
      <template #title>
        <MainTimer />
      </template>
      <template #content>
        <p class="m-0">
          {{ timer.start }}
        </p>
      </template>
    </Card>
  </div>
</template>
