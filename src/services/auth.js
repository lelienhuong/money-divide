import { clientApi } from '../api/client'

export const authService = {
  login: (form) => clientApi.post('/user/login', form),
  //
  register: (form) => clientApi.post('/user/register', form),
  //  
}
