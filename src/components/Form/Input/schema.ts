import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const UserCreateFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('E-mail is required')
    .email('E-mai format invalid'),
  password: yup.string().required(),
})
