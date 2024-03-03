import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <Box bgcolor="#EEEFF2">
      <Outlet />
    </Box>
  )
}
