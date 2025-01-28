<script setup lang="ts">
import StickyTimer from './modules/timer/components/StickyTimer.vue'
import SideBar from './modules/sidebar/components/SideBar.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex gap-0 bg-zinc-950">
    <SideBar />
    <main class="w-full rounded-2xl bg-zinc-900 m-4 border border-zinc-800">
      <RouterView />
    </main>
    <StickyTimer />
  </div>
</template>
<style scoped>
.inputtext.background {
  background: transparent;
}
</style>
