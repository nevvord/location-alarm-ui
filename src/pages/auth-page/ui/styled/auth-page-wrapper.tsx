import { Stack, styled } from '@mui/material'

import BgImg from '../assets/bg.svg'

export const AuthPageWrapper = styled(Stack)(() => ({
  height: '100%',
  backgroundImage: `url(${BgImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundColor: '#FFFBCE',
}))
