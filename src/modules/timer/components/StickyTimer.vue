<script setup lang="ts">
import { ref, watch } from 'vue'

import { useTimerStore } from '@/modules/timer/store/useTimerStore'
import PlayButton from './PlayButton.vue'
const { activeTimeEntry, startTimer, currentTimer } = useTimerStore()

import NumberFlow, { NumberFlowGroup } from '@number-flow/vue'

const hours = ref<number>(0)
const minutes = ref<number>(0)
const seconds = ref<number>(0)
const getTimeFormatted = (duration: number) => {
  hours.value = Math.floor(duration / 3600)
  minutes.value = Math.floor((duration % 3600) / 60)
  seconds.value = Math.floor(duration % 60)
  // time.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
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

      <NumberFlowGroup>
        <div
          style="font-variant-numeric: tabular-nums; --number-flow-char-height: 0.85em"
          class="~text-3xl/4xl flex items-baseline font-semibold"
        >
          <NumberFlow :value="hours" :format="{ minimumIntegerDigits: 2 }" />
          <NumberFlow
            prefix=":"
            :value="minutes"
            :digits="{ 1: { max: 5 } }"
            :format="{ minimumIntegerDigits: 2 }"
          />
          <NumberFlow
            prefix=":"
            :value="seconds"
            :digits="{ 1: { max: 5 } }"
            :format="{ minimumIntegerDigits: 2 }"
          />
        </div>
      </NumberFlowGroup>
      <!-- <span v-if="time">{{ time }}</span> -->
      <PlayButton :active="!!activeTimeEntry.interval" @click="start" />
    </div>
  </div>
</template>
<style scoped></style>
