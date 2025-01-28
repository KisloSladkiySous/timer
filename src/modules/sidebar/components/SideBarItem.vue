<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  title: string
  to: string
}>()
</script>
<template>
  <RouterLink
    class="flex items-center gap-2 px-2 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 hover:border-zinc-800 border border-transparent transition rounded-md cursor-pointer"
    :to="to"
  >
    <slot></slot>
    <span>{{ title }}</span>
  </RouterLink>
</template>
