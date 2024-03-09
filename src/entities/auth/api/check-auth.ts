import Cookies from 'js-cookie'
// import _ from 'lodash'
import { REFRESH_TOKEN } from '@shared/constants'
import { $apiNoInterceptors, IAuthResponse } from '@shared/http-instance'

export async function checkAuth() {
  return $apiNoInterceptors.get<IAuthResponse>('/auth/refresh', {
    params: {
      refresh_token: Cookies.get(REFRESH_TOKEN),
    },
  })

  // return new Promise<{ data: IAuthResponse }>((resolve, reject) => {
  //   setTimeout(() => {
  //     const value = _.random()
  //
  //     if (!value) {
  //       reject('error')
  //
  //       return
  //     }
  //
  //     resolve({
  //       data: {
  //         accessToken: 'test',
  //         refreshToken: 'test',
  //         user: {
  //           id: 1,
  //           email: 'test@email.com',
  //           firstName: 'test',
  //           lastName: 'test',
  //           createdAt: 'string',
  //           updatedAt: 'string',
  //         },
  //       },
  //     })
  //   }, 1000)
  // })
}
