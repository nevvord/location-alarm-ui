import 'react-i18next'

// eslint-disable-next-line import/no-internal-modules
import resources from './translations/en.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS?: 'common'

    resources: typeof resources
  }
}
