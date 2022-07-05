import { useQuery } from 'react-query'
import { FormatDate } from '../../helpers/formatDate'
import { IUsers } from '../../interfaces/IUsers'
import { Api } from '../../services/Api'

export const fetchUsers = async (page: number) => {
  const { data, headers } = await Api.get<IUsers>('users', {
    params: {
      page,
    },
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data?.users?.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: FormatDate(String(user.createdAt)),
    }
  })

  return { users, totalCount }
}

export const useUsers = (page: number) => {
  return useQuery(['users', page], () => fetchUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}
