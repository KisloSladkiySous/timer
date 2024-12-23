import { ref } from 'vue'

interface TimerInfo {
  start: number
  duration: number
  end?: number
}

const timers = ref<TimerInfo[]>([
  {
    start: 0,
    duration: 0,
    end: 0,
  },
])

export function useTimerStore() {
  const interval = ref()
  const timerInfo = ref<TimerInfo>({
    start: 0,
    duration: 0,
    end: 0,
  })

  const startTimer = () => {
    if (interval.value) {
      pauseTimer()
      return
    }

    if (!timerInfo.value.start) {
      timerInfo.value.start = Date.now()
      timers.value.push(timerInfo.value)
    }

    // send startTime to server

    interval.value = setInterval(() => {
      timerInfo.value.duration += 1
    }, 1_000)
  }

  const pauseTimer = () => {
    clearInterval(interval.value)
    interval.value = null
  }

  const stopTimer = () => {
    clearInterval(interval.value)
    interval.value = null
    timerInfo.value.duration = 0
    timerInfo.value.end = Date.now()

    // send deleteTime to server
  }

  return { interval, timers, timerInfo, startTimer, pauseTimer, stopTimer }
}
