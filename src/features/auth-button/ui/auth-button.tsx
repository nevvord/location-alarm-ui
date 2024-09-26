import { useGoogleLogin } from '@react-oauth/google'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useAuthStore } from '@entities/auth'

import { ACCESS_TOKEN, REFRESH_TOKEN, routePaths } from '@shared/constants'
import { $api, IAuthResponse } from '@shared/http-instance'

import { ReactComponent as GoogleLogo } from './assets/google-logo.svg'

import { StyledAuthButton } from './styled'

export function AuthButton() {
  const { t } = useTranslation('features')
  const navigate = useNavigate()
  const location = useLocation()
  const checkIsAuth = useAuthStore((state) => state.checkIsAuth)

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const userInfo = await $api
        .post<Omit<IAuthResponse, 'user'>>('/auth/login', {
          accessToken: `${codeResponse.access_token}`,
        })

        .then((res) => res.data)

      Cookies.set(ACCESS_TOKEN, userInfo.accessToken)

      Cookies.set(REFRESH_TOKEN, userInfo.refreshToken)

      checkIsAuth()

      if (location.pathname === routePaths.auth) {
        navigate(routePaths.home)
      }
    },
    onError: () => toast.error(t('auth.auth-error')),
  })

  return (
    <StyledAuthButton
      variant="outlined"
      onClick={() => login()}
      startIcon={<GoogleLogo />}
      fullWidth
    >
      {t('auth.auth-button')}
    </StyledAuthButton>
  )
}
