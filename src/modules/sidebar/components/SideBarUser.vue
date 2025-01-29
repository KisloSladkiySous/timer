<script setup lang="ts">
// Icons
// import SettingsIcon from '@/core/icons/SettingsIcon.vue'
import LogoutIcon from '@/core/icons/LogoutIcon.vue'
import UserIcon from '@/core/icons/UserIcon.vue'
import LoginIcon from '@/core/icons/LoginIcon.vue'

import { RouterLink } from 'vue-router'
import SideBarItem from '@/modules/sidebar/components/SideBarItem.vue'

import { useAuth } from '@/modules/login/composables/useAuth'
const { user, signOut, loading } = useAuth()
</script>
<template>
  <template v-if="!user && !loading">
    <SideBarItem title="Вход" to="/login">
      <LoginIcon />
    </SideBarItem>
  </template>
  <template v-else>
    <div
      v-if="loading"
      class="animate-pulse flex gap-2 items-center px-2 py-3 text-zinc-400 bg-zinc-900 border-zinc-800 border transition rounded-2xl w-full"
    >
      <div class="bg-zinc-700 rounded-xl w-10 h-10"></div>
      <div class="flex flex-col flex-1 pointer-events-none w-full">
        <div class="h-4 rounded bg-zinc-700 mb-2"></div>
        <div class="grid grid-cols-3">
          <div class="col-span-2 h-2 rounded bg-zinc-700"></div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="flex gap-2 items-center px-2 py-3 text-zinc-400 bg-zinc-900 border-zinc-800 border transition rounded-2xl w-full"
    >
      <div class="flex gap-2 items-center w-full">
        <div class="bg-zinc-700 rounded-xl w-10 h-10 flex justify-center items-center">
          <UserIcon />
        </div>
        <div class="flex flex-col flex-1 pointer-events-none">
          <p class="text-sm truncate">Имя фамилия</p>
          <p class="text-zinc-500 text-xs truncate">{{ user?.email }}</p>
        </div>
      </div>
      <RouterLink to="/settings" class="p-1 hover:text-zinc-100 transition cursor-pointer">
        <!-- <SettingsIcon :width="20" :height="20" /> -->
        <LogoutIcon @click="signOut" />
      </RouterLink>
    </div>
  </template>
</template>
