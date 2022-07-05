export type UserCreateFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export interface IUser {
  id: number
  name: string
  email: string
  created_at: string
}

export interface IUsers {
  users: Array<IUser>
}
