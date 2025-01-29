// timer.worker.js
let intervalId = null

self.onmessage = (e) => {
  let { cmd, duration } = e.data

  if (cmd === 'start') {
    // Send updates every second
    intervalId = setInterval(() => {
      self.postMessage(duration++)
    }, 1000)
  }

  if (cmd === 'stop') {
    console.log('stop')
    clearInterval(intervalId)
  }
}
