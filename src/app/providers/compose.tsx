import { GoogleOAuthProvider } from '@react-oauth/google'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { GOOGLE_CLIENT_ID } from '@shared/constants'

import { RouterProvider } from './router'
import { ThemeProvider } from './theme'

export function ComposeProviders() {
  return (
    <ThemeProvider>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />

        <RouterProvider />
      </GoogleOAuthProvider>
    </ThemeProvider>
  )
}
