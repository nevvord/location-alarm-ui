import { GoogleOAuthProvider } from '@react-oauth/google'
import { RouterProvider } from './router'
import { ThemeProvider } from './theme'

const clientId =
  '668153868575-fsu75sq9bjl077n9npobequrj7dp77te.apps.googleusercontent.com'

export function ComposeProviders() {
  return (
    <ThemeProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <RouterProvider />
      </GoogleOAuthProvider>
    </ThemeProvider>
  )
}
