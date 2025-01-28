<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <div
    class="flex items-center gap-2 px-2 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 hover:border-zinc-800 border border-transparent transition rounded-md cursor-pointer"
  >
    <slot></slot>
    <span>{{ title }}</span>
  </div>
</template>
