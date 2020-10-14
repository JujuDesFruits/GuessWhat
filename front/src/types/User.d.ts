export interface IUser {
  id: number
  mail: string
  token: string
  username: string
  roles: string[]
  firstName: string
  lastName: string
}

export interface UserLoginOptions {
  identifier: string
  password: string
}
