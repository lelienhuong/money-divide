import { clientApi } from '../api/client'

export const authService = {
  login: (form) => clientApi.post('api/auth', form),
  //
  signup: (form) => clientApi.post('/auth/signup', form),
  //  
}
