import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { formatDate } from '../../helpers/formatDate'
import { IUsers } from '../../interfaces/IUsers'
import { Api } from '../../services/Api'

interface FetchUsersResponseProps extends IUsers {
  totalCount: number
}

export const fetchUsers = async (
  page: number
): Promise<FetchUsersResponseProps> => {
  const { data, headers } = await Api.get<IUsers>('/users', {
    params: {
      page: page,
    },
  })

  const users = data?.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: formatDate(user.created_at),
    }
  })

  const totalCount = Number(headers['x-total-count'])

  return { users, totalCount }
}

export const useUsers = (page: number) => {
  return useQuery(['users', page], () => fetchUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}
