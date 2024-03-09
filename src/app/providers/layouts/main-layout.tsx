import { Box } from '@mui/material'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { AuthModal } from '@widgets/auth-modal'

import { useAuthStore } from '@entities/auth'

import { GlobalLoader } from '@shared/ui'

export function MainLayout() {
  const checkIsAuth = useAuthStore((state) => state.checkIsAuth)
  const isLoading = useAuthStore((state) => state.isLoading)

  useEffect(() => {
    checkIsAuth()
  }, [])

  return (
    <Box height="100%">
      {isLoading && <GlobalLoader />}
      <Outlet />
      <AuthModal />
    </Box>
  )
}
