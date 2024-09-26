import { IUser } from '@shared/types'

export interface IAuthResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}
