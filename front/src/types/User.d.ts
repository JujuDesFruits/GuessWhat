export interface IUser {
  id: number
  mail: string
  token: string
  username: string
  roles: string[]
  createdAt: Date | null
  points: number
}

export interface UserLoginOptions {
  identifier: string
  password: string
}

export interface UserRegisterOptions {
  email: string
  username: string
  password: string
}

export interface UserForgotPassword {
  email: string
}
