import 'react-i18next'

import resources from '@shared/i18n/translations/en.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS?: 'common'

    resources: typeof resources
  }
}
