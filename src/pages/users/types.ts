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
  createdAt: string
}
