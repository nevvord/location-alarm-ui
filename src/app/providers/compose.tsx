import { RouterProvider } from './router'
import { ThemeProvider } from './theme'

export function ComposeProviders() {
  return <ThemeProvider children={<RouterProvider />} />
}
