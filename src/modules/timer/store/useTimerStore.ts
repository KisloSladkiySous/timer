import { ref, computed, watch, onMounted } from 'vue'

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

const isActive = ref(false)
const duration = ref()

const worker = ref<Worker | null>(null)

// Handle start/stop commands
watch(isActive, (newIsActive) => {
  if (newIsActive) {
    worker.value?.postMessage({
      cmd: 'start',
      duration: duration.value,
    })

    if (duration.value) return
    const newTimer = Object.create(timerBlueprint)
    newTimer.id = timers.value.length + 1
    newTimer.start = Date.now()
    newTimer.title = `Таймер ${newTimer.id}`
    timers.value.unshift(newTimer)
  } else {
    worker.value?.postMessage({ cmd: 'stop' })
  }
})

export function useTimerStore() {
  onMounted(() => {
    window.addEventListener('beforeunload', onWindowClose)
    if (worker.value) return

    worker.value = new Worker(new URL('../utils/timer.worker.js', import.meta.url))
    worker.value.onmessage = (e) => {
      duration.value = e.data
    }

    // Resume timer if persisted state exists
    if (!isActive.value) {
      duration.value = Number(localStorage.getItem('timerDuration'))
    }
  })

  const onWindowClose = () => {
    worker.value?.terminate()
    if (isActive.value) {
      localStorage.setItem('timerDuration', duration.value.toString())
    }
  }

  const toggleTimer = () => {
    isActive.value = !isActive.value
    // send startTime to server
  }

  const stopTimer = () => {
    worker.value?.postMessage({ cmd: 'stop' })
    localStorage.removeItem('timerDuration')

    isActive.value = false
    duration.value = 0
    timers.value[0].end = Date.now()
    // send deleteTime to server
  }

  const currentTimer = computed(() => {
    if (duration.value || isActive.value) return timers.value[0]
    return null
  })

  return {
    currentTimer,
    duration,
    isActive,
    timers,
    toggleTimer,
    stopTimer,
    worker,
  }
}
