<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/modules/login/composables/useAuth'

import Button from 'primevue/button'

import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

const { signIn, signOut } = useAuth()

const handleLogin = async (e: Event) => {
  e.preventDefault()
  await signIn(email.value, password.value).then(() => {
    router.push('/')
  })
}

const handleSignOut = async (e: Event) => {
  e.preventDefault()
  await signOut().then(() => {})
}
</script>
<template>
  <div class="flex justify-center items-center h-full">
    <form @submit="handleLogin" class="flex flex-col gap-4 w-full max-w-md">
      <div class="flex flex-col gap-2">
        <label for="email" class="text-zinc-400">Email</label>
        <input
          type="email"
          v-model="email"
          id="email"
          required
          class="w-full rounded-lg border-zinc-800 border p-2"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-zinc-400">Password</label>
        <input
          type="password"
          v-model="password"
          id="password"
          class="w-full rounded-lg border-zinc-800 border p-2"
        />
      </div>
      <div class="flex justify-between">
        <Button type="submit">Войти</Button>
      </div>
    </form>
  </div>
  <div>
    <Button @click="handleSignOut">Выйти</Button>
  </div>
</template>
