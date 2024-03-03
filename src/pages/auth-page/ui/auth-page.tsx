import { Box, Button, Stack, SxProps, useTheme } from '@mui/material'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

import BgImg from './assets/bg.svg'
import { ReactComponent as GoogleLogo } from './assets/google-logo.svg'
import IntroImg from './assets/intro-image.png'
import LocalertImg from './assets/localert.png'

interface IProps {
  sx?: SxProps
}

export function AuthPage({ sx }: IProps) {
  const theme = useTheme()
  // const navigate = useNavigate()

  const login = useGoogleLogin({
    // flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      console.log('codeResponse', codeResponse)

      const userInfo = await axios
        .post('http://localhost:3000/auth/login', {
          accessToken: `${codeResponse.access_token}`,
        })

        .then((res) => res.data)

      // console.log(userInfo)
      // const tokens = await axios.post('http://localhost:5173/auth/google', {
      //   code: codeResponse.code,
      // })

      console.log('userInfo', userInfo)

      // navigate(routePaths.home)
    },
    onError: (error) => console.log('error auth', error),
    // flow
    // redirect_uri
  })

  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: '#FFFBCE',
        ...sx,
      }}
    >
      <Box
        sx={{
          padding: '10px 20px',
          marginTop: theme.spacing(8),
          backgroundColor: '#FEEA27',
          border: '2px solid #000',
          transform: 'rotate(-1deg)',
        }}
      >
        <Box
          sx={{ width: '100%', maxWidth: 294 }}
          component="img"
          src={LocalertImg}
        />
      </Box>

      <Box
        component="img"
        src={IntroImg}
        sx={{ display: 'block', width: '100%', maxWidth: 375 }}
      />

      <Box px={2} width="100%" maxWidth={500} mb={8}>
        <Button
          variant="outlined"
          onClick={() => login()}
          startIcon={<GoogleLogo />}
          fullWidth
          sx={{
            padding: 1.75,
            borderRadius: '10px',
            border: '1px solid #000',
            fontFamily: 'Roboto, sans-serif',
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.2,
            backgroundColor: '#fff',
            color: 'rgba(0, 0, 0, 0.54)',
            '& .MuiButton-startIcon': {
              marginRight: 2,
            },
            '&:hover': {
              border: '1px solid #000',
              backgroundColor: '#fff',
            },
          }}
        >
          Continue with Google
        </Button>
      </Box>
    </Stack>
  )
}
