import Cookies from 'js-cookie'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { checkAuth, login, logout } from '@entities/auth'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@shared/constants'
import { IUser } from '@shared/types'

interface IAuthState {
  user: IUser | null
  isLoading: boolean

  checkIsAuth: () => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

export const useAuthStore = create<IAuthState>()(
  devtools(
    (set) => ({
      user: null,
      isLoading: false,

      checkIsAuth: async () => {
        set({ isLoading: true })

        try {
          const response = await checkAuth()

          Cookies.set(ACCESS_TOKEN, response.data.accessToken)

          Cookies.set(REFRESH_TOKEN, response.data.refreshToken)

          set({ user: response.data.user })
        } catch (e) {
          // console.log(e.response?.data?.message)
        } finally {
          set({ isLoading: false })
        }
      },

      login: async (email, password) => {
        set({ isLoading: true })

        try {
          const response = await login(email, password)

          Cookies.set(ACCESS_TOKEN, response.data.accessToken)

          Cookies.set(REFRESH_TOKEN, response.data.refreshToken)

          set({ user: response.data.user })
        } catch (e) {
          // console.log(e.response?.data?.message)
        } finally {
          set({ isLoading: false })
        }
      },

      logout: async () => {
        set({ isLoading: true })

        try {
          await logout()

          Cookies.remove(ACCESS_TOKEN)

          Cookies.remove(REFRESH_TOKEN)

          set({ user: null })
        } catch (e) {
          // console.log(e.response?.data?.message)
        } finally {
          set({ isLoading: false })
        }
      },
    }),
    {
      name: 'auth-store',
    }
  )
)
