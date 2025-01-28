<script setup lang="ts">
import { ref } from 'vue'
const form = ref({
  email: null,
  password: null,
})

const sendForm = (e: Event) => {
  e.preventDefault()
  console.log(form.value)
}
</script>
<template>
  <div class="flex justify-center items-center h-full">
    <form @submit="sendForm" class="flex flex-col gap-4 w-full max-w-md">
      <div class="flex flex-col gap-2">
        <label for="email" class="text-zinc-400">Email</label>
        <input
          type="email"
          v-model="form.email"
          id="email"
          class="w-full rounded-lg border-zinc-800 border p-2"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-zinc-400">Password</label>
        <input
          type="password"
          v-model="form.password"
          id="password"
          class="w-full rounded-lg border-zinc-800 border p-2"
        />
      </div>
      <div class="flex justify-between">
        <button class="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">Войти</button>
      </div>
    </form>
  </div>
</template>
