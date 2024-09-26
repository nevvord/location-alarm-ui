import { $api, IAuthResponse } from '@shared/http-instance'

export async function login(email: string, password: string) {
  return await $api.post<IAuthResponse>('/auth/login', {
    email,
    password,
  })

  // return new Promise<{ data: IAuthResponse }>((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       data: {
  //         accessToken: 'test',
  //         refreshToken: 'test',
  //         user: {
  //           id: 1,
  //           email: email,
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
