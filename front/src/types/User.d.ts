export interface IUser {
  id: number
  mail: string
  token: string
  username: string
  roles: string[]
}

export interface UserLoginOptions {
  identifier: string
  password: string
}

export interface UserForgotPassword {
  email: string
}
