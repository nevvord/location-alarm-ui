import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'

import { AuthPageRouter } from '@pages/auth-page'
import { MainPageRouter } from '@pages/main'
import { UiKitPageRouter } from '@pages/ui-kit'

import { routePaths } from '@shared/constants'

import { AuthLayout, MainLayout } from './layouts'

const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <MainLayout />,
    children: [MainPageRouter, ...UiKitPageRouter],
  },
  {
    path: routePaths.auth,
    element: <AuthLayout />,
    children: [AuthPageRouter],
  },
])

export function RouterProvider() {
  return <ReactRouterProvider router={router} />
}
