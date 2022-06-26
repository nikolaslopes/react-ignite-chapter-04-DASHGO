import * as yup from 'yup'

export const UserCreateFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('E-mail is required')
    .email('E-mai format invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'At least 6 chars')
    .max(12, 'Maximum 12 characters'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'The passwords must be same'),
})
