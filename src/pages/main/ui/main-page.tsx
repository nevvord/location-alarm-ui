import { Button } from '@mui/material'
import { googleLogout } from '@react-oauth/google'
// import { useTranslation } from 'react-i18next'

export function MainPage() {
  // const { t } = useTranslation()

  return (
    <>
      <Button variant="contained" onClick={() => googleLogout()}>
        Logout
      </Button>
      
      <p></p>
    </>
  )
}
