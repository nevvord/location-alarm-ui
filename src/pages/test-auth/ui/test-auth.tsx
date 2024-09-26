import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useAuthStore } from '@entities/auth'
import { ACCESS_TOKEN } from '@shared/constants'

export function TestAuth() {
  const { isLoading, checkIsAuth, login, user, logout } = useAuthStore()

  useEffect(() => {
    const token = Cookies.get(ACCESS_TOKEN)

    if (token) {
      checkIsAuth()
    }
  }, [])

  return (
    <Stack
      width={'100%'}
      minHeight={'100vh'}
      gap={2}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack width={250} border={'1px solid'} padding={1}>
        {isLoading && <CircularProgress />}

        {user && !isLoading && (
          <>
            <Typography variant={'h1'}>You are auth {user.email}!</Typography>

            <Button variant={'outlined'} onClick={logout}>
              Logout
            </Button>
          </>
        )}

        {!user && !isLoading && (
          <>
            <Button
              onClick={() => {
                login('test@email.com', '12345')
              }}
            >
              Login
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  )
}
