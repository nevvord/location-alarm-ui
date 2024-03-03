import { useGoogleOneTapLogin } from '@react-oauth/google'
import { Outlet } from 'react-router-dom'

import { useAuthStore } from '@shared/auth'

export function MainLayout() {
  const setUserCredentials = useAuthStore((state) => state.setUserCredentials)

  // useGoogleOneTapLogin({
  //   onSuccess: (credentialResponse) => {
  //     console.log('credentialResponse', credentialResponse)

  //     setUserCredentials(credentialResponse)
  //   },
  //   onError: () => {
  //     console.log('Login Failed')
  //   },
  //   // disabled: true,

  //   cancel_on_tap_outside: true,
  // })

  return <Outlet />
}
