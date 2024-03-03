import { RouteObject } from 'react-router-dom'

import { routePaths } from '@shared/constants'

import { AuthPage } from './ui'

export const AuthPageRouter: RouteObject = {
  path: routePaths.auth,
  element: <AuthPage />,
}
