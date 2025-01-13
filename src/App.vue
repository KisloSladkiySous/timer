<script setup lang="ts">
import MainTimer from '@/modules/timer/components/MainTimer.vue'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import dayjs from 'dayjs'
import { useTimerStore } from '@/modules/timer/store/useTimerStore'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import StickyTimer from './modules/timer/components/StickyTimer.vue'

const { timers } = useTimerStore()

const formatTime = (time?: number | string) => {
  return dayjs(time).format('HH:mm:ss')
}
</script>

<template>
  <div class="flex justify-center items-center h-screen flex-col gap-4">
    <MainTimer />
    <div>
      <DataTable tableStyle="min-width: 50rem">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
    <div v-if="timers.length" class="grid grid-cols-4 md:grid-cols-6 gap-4">
      <Card v-for="timer in timers" :key="timer.id">
        <template #title>
          <InputText
            v-model="timer.title"
            :placeholder="`Таймер номер ${timer.id}`"
            class="!bg-transparent !border-0 !p-0"
          />
        </template>
        <template #content>
          <p class="m-0">Время запуска:{{ formatTime(timer.start) }}</p>
          <p v-if="timer.end" class="m-0">Время окончания:{{ formatTime(timer.end) }}</p>
        </template>
      </Card>
    </div>
    <StickyTimer />
  </div>
</template>
<style scoped>
.inputtext.background {
  background: transparent;
}
</style>
