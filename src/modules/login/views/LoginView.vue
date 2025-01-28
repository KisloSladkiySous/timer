<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase'

// const form = ref({
//   email: null,
//   password: null,
// })

const loading = ref(false)
const email = ref('')

const handleLogin = async (e: Event) => {
  e.preventDefault()
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message)
    }
  } finally {
    loading.value = false
  }
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
      <!-- <div class="flex flex-col gap-2">
        <label for="password" class="text-zinc-400">Password</label>
        <input
          type="password"
          v-model="form.password"
          id="password"
          class="w-full rounded-lg border-zinc-800 border p-2"
        />
      </div> -->
      <div class="flex justify-between">
        <button class="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">Войти</button>
      </div>
    </form>
  </div>
</template>
