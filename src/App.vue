<script setup lang="ts">
import { ref, computed } from 'vue'
const interval = ref()

const timerInfo = ref({
  start: 0,
  duration: 0,
  end: 0,
})


const startTimer = () => {
  if (interval.value) {
    pauseTimer();
    return;
  }

  if (!timerInfo.value.start) {
    timerInfo.value.start = Date.now();
  }

  // send startTime to server

  interval.value = setInterval(() => {
    timerInfo.value.duration += 1;
  }, 1_000)
}

const pauseTimer = () => {
  clearInterval(interval.value)
  interval.value = null
}

const stopTimer = () => {
  clearInterval(interval.value)
  interval.value = null
  timerInfo.value.duration = 0;
  timerInfo.value.end = Date.now();

  // send deleteTime to server
}

const getTimeFormatted = computed(() => {
  const hours = Math.floor(timerInfo.value.duration / 3600)
  const minutes = Math.floor((timerInfo.value.duration % 3600) / 60)
  const seconds = Math.floor(timerInfo.value.duration % 60)
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})
</script>

<template>
  <div
    class="group flex rounded-md max-w-sm flex-col overflow-hidden border border-neutral-300 bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
    <button @click="startTimer()" type="button"
      class="cursor-pointer whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium tracking-wide text-neutral-100 transition hover:opacity-75 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:bg-white dark:text-black dark:focus-visible:outline-white">
      {{ interval ? 'Stop' : 'Start' }}
    </button>
    <button @click="stopTimer()" type="button"
      class="cursor-pointer whitespace-nowrap rounded-md bg-neutral-800 px-4 py-2 text-sm font-medium tracking-wide text-white transition hover:opacity-75 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:bg-neutral-300 dark:text-black dark:focus-visible:outline-neutral-300">
      Remove
    </button>
    {{ getTimeFormatted }}
  </div>

</template>
