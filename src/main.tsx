import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './shared/i18n'

import App from '@app/app'

const rootElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
