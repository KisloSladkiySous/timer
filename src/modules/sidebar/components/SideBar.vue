<script setup lang="ts">
// Icons
import DashboardIcon from '@/core/icons/DashboardIcon.vue'
import TimerIcon from '@/core/icons/TimerIcon.vue'

import SideBarItem from '@/modules/sidebar/components/SideBarItem.vue'
import SideBarUser from '@/modules/sidebar/components/SideBarUser.vue'
</script>
<template>
  <div class="h-screen p-4 pr-0">
    <div class="w-64 flex flex-col justify-between h-full">
      <!-- <Logo /> -->
      <div class="flex flex-col gap-2 mt-4 rounded-xl p-1">
        <SideBarItem title="Дашборд" to="/">
          <DashboardIcon />
        </SideBarItem>
        <SideBarItem title="Таймеры" to="/timer">
          <TimerIcon />
        </SideBarItem>
      </div>
      <SideBarUser />
    </div>
  </div>
</template>
