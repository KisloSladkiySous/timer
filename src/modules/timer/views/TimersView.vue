<script setup lang="ts">
import { supabase } from '@/supabase'
import { ref } from 'vue'
import Button from 'primevue/button'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const timers = ref<any[] | null>(null)

async function getTimers() {
  const { data } = await supabase.from('timers').select('*')
  timers.value = data
  console.log(data)
}
</script>
<template>
  <div>
    <Button @click="getTimers">Get timers</Button>
    <div>
      {{ timers }}
    </div>
  </div>
</template>
