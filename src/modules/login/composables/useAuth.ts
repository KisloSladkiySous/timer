// src/composables/useAuth.ts
import { ref, onMounted } from 'vue'
import type { Session, User } from '@supabase/supabase-js'
import { supabase } from '@/supabase'

export function useAuth() {
  const user = ref<User | null>(null)
  const session = ref<Session | null>(null)

  const loading = ref(false)

  const checkUser = async () => {
    loading.value = true
    const { data } = await supabase.auth.getUser()

    user.value = data.user || null
    loading.value = false
  }

  onMounted(async () => {
    await checkUser()

    // Подписываемся на изменение состояния пользователя
    supabase.auth.onAuthStateChange((event, sessionData) => {
      user.value = sessionData?.user || null
      session.value = sessionData
    })
  })

  const signOut = async () => {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    loading.value = false

    if (error) {
      alert(error.message)
    } else {
      user.value = null
    }
  }

  const signIn = async (email: string, password: string) => {
    loading.value = true
    await supabase.auth
      .signInWithPassword({
        email,
        password,
      })
      .then(() => {
        loading.value = false
      })
      .catch((error) => {
        if (error instanceof Error) {
          alert(error.message)
        }
      })
  }

  return {
    user,
    session,
    loading,
    signOut,
    signIn,
  }
}
