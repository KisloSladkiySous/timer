<script setup lang="ts">
// Icons
import SettingsIcon from '@/core/icons/SettingsIcon.vue'
import UserIcon from '@/core/icons/UserIcon.vue'

import { RouterLink } from 'vue-router'
</script>
<template>
  <div
    class="flex items-center gap-2 px-2 py-3 text-zinc-400 bg-zinc-900 border-zinc-800 border transition rounded-2xl"
  >
    <div class="flex gap-2 items-center">
      <div class="bg-zinc-700 rounded-xl w-10 h-10 flex justify-center items-center">
        <UserIcon />
      </div>
      <div class="flex flex-col flex-1 pointer-events-none">
        <p class="text-sm truncate">Мисрала Мижраликал</p>
        <p class="text-zinc-500 text-sm truncate">poopidoopi@gmail.com</p>
      </div>
      <RouterLink to="/settings" class="p-1 hover:text-zinc-100 transition cursor-pointer">
        <SettingsIcon :width="20" :height="20" />
      </RouterLink>
    </div>
  </div>
</template>
