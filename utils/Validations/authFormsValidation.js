import * as yup from 'yup'

import { requiredErrorMessage } from './helpers'

const loginFormValidations = yup.object().shape({
    username: yup.string().required(requiredErrorMessage('Username')),
    password: yup.string().required(requiredErrorMessage('Password'))
})

export { loginFormValidations }
