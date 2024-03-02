import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from 'react-router-dom'

import { MainPageRouter } from '@pages/main'
import { TestAuthRoute } from '@pages/test-auth'
import { UiKitPageRouter } from '@pages/ui-kit'
import { MainLayout } from './layouts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [MainPageRouter, ...UiKitPageRouter, TestAuthRoute],
  },
])

export function RouterProvider() {
  return <ReactRouterProvider router={router} />
}
