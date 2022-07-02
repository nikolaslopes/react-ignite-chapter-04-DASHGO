import { useQuery } from 'react-query'
import { FormatDate } from '../../helpers/formatDate'
import { Api } from '../../services/Api'
import { IUser, IUsers } from './types'

export const fetchUsers = async (): Promise<IUser[]> => {
  const { data } = await Api.get<IUser[]>('users')

  const users = data.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: FormatDate(String(user.createdAt)),
    }
  })

  return users
}

export const useUsers = () => {
  return useQuery(['users'], fetchUsers, {
    staleTime: 1000 * 5, // 5 seconds
  })
}
