<script setup lang="ts">
import PlayIcon from '@/core/icons/PlayIcon.vue'
import StopIcon from '@/core/icons/StopIcon.vue'

const props = defineProps<{
  active: boolean
}>()
</script>

<template>
  <button class="relative w-8 h-8">
    <div class="relative z-10">
      <div
        v-if="props.active"
        class="rounded-full w-8 h-8 flex justify-center items-center p-2 bg-red-400"
      >
        <StopIcon class="text-white" />
      </div>
      <div v-else class="rounded-full w-8 h-8 flex justify-center items-center p-2 bg-green-400">
        <PlayIcon class="text-white" />
      </div>
    </div>
    <div :class="['pb-background', { 'pb-background_active': active }]"></div>
  </button>
</template>
<style scoped>
.pb-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.pb-background::before,
.pb-background::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 100%;
  transform: translate(-50%, -50%) scale(1.1);
  opacity: 0;
  z-index: 1;
  transition: opacity 1s ease-in-out;
  background-color: rgb(74 222 128 / 1);
}

.pb-background::after {
  animation: roundAfter 5s ease-in infinite forwards reverse;
  width: 100%;
  height: 110%;
}

.pb-background::before {
  animation: roundBefore 5s ease-in infinite forwards;
  height: 110%;
  width: 100%;
}

.pb-background_active::before,
.pb-background_active::after {
  opacity: 0.3;
  background-color: rgb(248 113 113 / 1);
}

@keyframes roundBefore {
  0% {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(360deg);
  }
}

@keyframes roundAfter {
  0% {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(360deg);
  }
}
</style>
