<template>
  <button :class="buttonClasses" :type="type" :disabled="disabled" @click="handleClick">
    <!-- <BaseIcon :icon="props.icon" v-if="props.icon" /> -->

    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import type { ButtonHTMLAttributes } from 'vue'
// Типизация пропсов
type ButtonColor = 'primary' | 'secondary' | 'danger' | 'info' | 'success'
type ButtonVariant = 'default' | 'outline' | 'ghost' | 'withIcon'

// Пропсы компонента
const props = withDefaults(
  defineProps<{
    label: string
    type?: ButtonHTMLAttributes['type']
    variant?: ButtonVariant
    color?: ButtonColor
    icon?: string | null
    disabled?: boolean
  }>(),
  {
    type: 'button',
    variant: 'default',
    color: 'primary',
  },
)

// Эмиттер событий
const emit = defineEmits<{
  (e: 'click'): void
}>()

// Вычисляемые классы для кнопки
const buttonClasses = computed(() => {
  const baseClasses =
    'py-2 px-4 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200'
  const colorClasses = getColorClasses()
  const variantClasses = getVariantClasses()
  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

  return `${baseClasses} ${colorClasses} ${variantClasses} ${disabledClasses}`
})

// Метод для обработки кликов
const handleClick = () => {
  if (props.disabled) return
  emit('click')
}

// Функция для получения классов цвета
const getColorClasses = (): string => {
  switch (props.color) {
    case 'primary':
      return 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
    case 'secondary':
      return 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500'
    case 'danger':
      return 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500'
    case 'info':
      return 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500'
    case 'success':
      return 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500'
    default:
      return 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
  }
}

// Функция для получения классов варианта
const getVariantClasses = (): string => {
  switch (props.variant) {
    case 'outline':
      return 'border-2 border-current bg-transparent text-current hover:bg-opacity-10'
    case 'ghost':
      return 'bg-transparent text-current hover:bg-opacity-5'
    case 'withIcon':
      return 'flex items-center space-x-2'
    default:
      return 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
  }
}
</script>

<style scoped>
/* Здесь можно добавить дополнительные стили, если нужно */
</style>
