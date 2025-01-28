<script setup lang="ts">
import StickyTimer from './modules/timer/components/StickyTimer.vue'
import SideBar from './modules/sidebar/components/SideBar.vue'

import { RouterView } from 'vue-router'

// const session = ref()

// onMounted(() => {
//   supabase.auth.getSession().then(({ data }) => {
//     session.value = data.session
//   })

//   supabase.auth.onAuthStateChange((_, _session) => {
//     session.value = _session
//   })

//   console.log(session.value)
// })
</script>

<template>
  <div class="flex gap-0 bg-zinc-950">
    <SideBar />
    <main class="w-full p-4 rounded-2xl bg-zinc-900 m-4 border border-zinc-800">
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
