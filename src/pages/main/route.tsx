import { RouteObject } from 'react-router-dom'

import { routePaths } from '@shared/constants'

import { MainPage } from './ui'

export const MainPageRouter: RouteObject = {
  path: routePaths.home,
  element: <MainPage />,
}
