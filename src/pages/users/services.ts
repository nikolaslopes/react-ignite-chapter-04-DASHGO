import { FormatDate } from '../../helpers/formatDate'
import { Api } from '../../services/Api'
import { IUser } from './types'

export const fetchUsers = async () => {
  const { data } = await Api.get('users')

  const users = data.users.map((user: IUser) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: FormatDate(String(user.createdAt)),
    }
  })

  return users
}
