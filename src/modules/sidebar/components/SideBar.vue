<script setup lang="ts">
import SideBarItem from '@/modules/sidebar/components/SideBarItem.vue'
import { useRouter } from 'vue-router'

// Icons
import DashboardIcon from '@/core/icons/DashboardIcon.vue'

const router = useRouter()
</script>
<template>
  <div class="h-screen w-64">
    <div class="flex flex-col items-centerh-full p-4 pr-0">
      <!-- <Logo /> -->
      <div class="flex flex-col gap-2 mt-4 rounded-xl p-1">
        <SideBarItem title="Дашборд" @click="router.push('/')">
          <DashboardIcon />
        </SideBarItem>
        <SideBarItem title="Таймеры" @click="router.push('/timer')">
          <DashboardIcon />
        </SideBarItem>
        <SideBarItem title="Таймеры" @click="router.push('/timer')">
          <DashboardIcon />
        </SideBarItem>
      </div>
    </div>
  </div>
</template>
