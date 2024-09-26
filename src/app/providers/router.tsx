import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'

import { AuthPageRouter } from '@pages/auth-page'
import { MainPageRouter } from '@pages/main'
import { TestAuthRoute } from '@pages/test-auth'
import { UiKitPageRouter } from '@pages/ui-kit'

import { routePaths } from '@shared/constants'

import { MainLayout } from './layouts'

const router = createBrowserRouter([
  {
    path: routePaths.home,
    element: <MainLayout />,
    children: [MainPageRouter, ...UiKitPageRouter, TestAuthRoute],
  },
  {
    path: routePaths.auth,
    children: [AuthPageRouter],
  },
])

export function RouterProvider() {
  return <ReactRouterProvider router={router} />
}
