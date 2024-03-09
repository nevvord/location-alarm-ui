import { Box, SxProps } from '@mui/material'

import { AuthButton } from '@features/auth-button'

import IntroImg from './assets/intro-image.png'
import LocalertImg from './assets/localert.png'

import { AuthPageWrapper, LogoWrapper } from './styled'

interface IProps {
  sx?: SxProps
}

export function AuthPage({ sx }: IProps) {
  return (
    <AuthPageWrapper justifyContent="space-between" alignItems="center" sx={sx}>
      <LogoWrapper>
        <Box
          sx={{ width: '100%', maxWidth: 294 }}
          component="img"
          src={LocalertImg}
        />
      </LogoWrapper>

      <Box
        component="img"
        src={IntroImg}
        sx={{ display: 'block', width: '100%', maxWidth: 375 }}
      />

      <Box px={2} width="100%" maxWidth={500} mb={8}>
        <AuthButton />
      </Box>
    </AuthPageWrapper>
  )
}
