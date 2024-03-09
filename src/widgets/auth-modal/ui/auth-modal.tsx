import { Drawer } from '@mui/material'
import { useEffect, useState } from 'react'

import { AuthButton } from '@features/auth-button'

import { useAuthStore } from '@entities/auth'

export function AuthModal() {
  const isAuth = useAuthStore((state) => state.isAuth)
  const isLoading = useAuthStore((state) => state.isLoading)
  const [isShowAuth, setIsShowAuth] = useState<boolean>(false)

  useEffect(() => {
    if (!isLoading && !isAuth) {
      setIsShowAuth(true)
    } else {
      setIsShowAuth(false)
    }
  }, [isLoading, isAuth])

  return (
    <Drawer
      anchor="bottom"
      open={isShowAuth}
      onClose={() => setIsShowAuth(false)}
      aria-describedby="Auth-dialog"
      sx={{
        '& .MuiPaper-root': {
          padding: '24px 16px',
        },
      }}
    >
      <AuthButton />
    </Drawer>
  )
}
