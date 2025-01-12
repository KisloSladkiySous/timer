import { ref, computed } from 'vue'

interface ITimer {
  id: number
  title: string | null
  start: number
  duration: number
  end?: number
}

const timers = ref<ITimer[]>([])
const timerBlueprint: ITimer = {
  id: 0,
  title: null,
  start: 0,
  duration: 0,
  end: 0,
}

const activeTimeEntry = ref<{
  interval: number | null
  duration: number
}>({
  interval: null,
  duration: 0,
})

export function useTimerStore() {
  const startTimer = () => {
    if (activeTimeEntry.value.interval) {
      pauseTimer()
      return
    }

    if (!activeTimeEntry.value.duration) {
      const newTimer = Object.create(timerBlueprint)
      newTimer.id = timers.value.length + 1
      newTimer.start = Date.now()
      newTimer.title = `Таймер ${newTimer.id}`
      timers.value.unshift(newTimer)
    }

    // send startTime to server

    activeTimeEntry.value.interval = setInterval(() => {
      activeTimeEntry.value.duration += 1
    }, 1_000)
  }

  const pauseTimer = () => {
    clearInterval(activeTimeEntry.value.interval!)
    activeTimeEntry.value.interval = null
  }

  const stopTimer = () => {
    clearInterval(activeTimeEntry.value.interval!)
    activeTimeEntry.value.interval = null
    activeTimeEntry.value.duration = 0
    timers.value[0].end = Date.now()
    // send deleteTime to server
  }

  const currentTimer = computed(() => {
    if (activeTimeEntry.value.duration || activeTimeEntry.value.interval) return timers.value[0]
    return null
  })

  return { currentTimer, activeTimeEntry, timers, startTimer, pauseTimer, stopTimer }
}
