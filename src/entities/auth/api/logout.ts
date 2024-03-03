import { $api } from '@shared/http-instance'

export async function logout() {
  return $api.post('/auth/logout')

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(true)
  //   }, 1000)
  // })
}
