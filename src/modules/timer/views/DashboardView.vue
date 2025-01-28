<script setup lang="ts">
import MainTimer from '@/modules/timer/components/MainTimer.vue'
import TreeTable from 'primevue/treeTable'
// import dayjs from 'dayjs'

// import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import { getTreeTableNodesData } from '@/utils/getTreeNodesData'
import { ref } from 'vue'

const data = ref()
data.value = getTreeTableNodesData()

import { useTimerStore } from '@/modules/timer/store/useTimerStore'
const { timers } = useTimerStore()

// const formatTime = (time?: number | string) => {
//   return dayjs(time).format('HH:mm:ss')
// }

// const formatDays = (time: string) => {
//   return dayjs(time).format('D.MM.YYYY')
// }
</script>
<template>
  <div class="flex justify-center items-center flex-col gap-4">
    <MainTimer />
    <div v-if="timers">
      <TreeTable
        :value="getTreeTableNodesData()"
        paginator
        :rows="5"
        :rowsPerPageOptions="[5, 10, 20, 50]"
        scrollable
        scrollHeight="400px"
        tableStyle="min-width: 50rem"
        selectionMode="checkbox"
      >
        <!-- <Column field="id" header="Code"></Column>
        <Column field="title" header="Name"></Column>
        <Column field="start" header="Category">
          <template #body="slotProps">
            <span> {{ formatDays(slotProps.data.start) }}</span>
          </template>
        </Column> -->
        <Column field="name" header="Name" expander style="width: 34%"></Column>
        <Column field="size" header="Size" style="width: 33%"></Column>
        <Column field="type" header="Type" style="width: 33%"></Column>
      </TreeTable>
    </div>
    <!-- <div v-if="timers.length" class="grid grid-cols-4 md:grid-cols-6 gap-4">
      <Card v-for="timer in timers" :key="timer.id">
        <template #title>
          <InputText v-model="timer.title" :placeholder="`Таймер номер ${timer.id}`"
            class="!bg-transparent !border-0 !p-0" />
        </template>
        <template #content>
          <p class="m-0">Время запуска:{{ formatTime(timer.start) }}</p>
          <p v-if="timer.end" class="m-0">Время окончания:{{ formatTime(timer.end) }}</p>
        </template>
      </Card>
    </div> -->
  </div>
</template>
