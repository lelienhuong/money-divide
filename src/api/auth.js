import axios from 'axios';

export const authApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: ''
    }
})

authApi.interceptors.request.use(
    (config)=>{
        const auth = localStorage.getItem(auth)
        auth = JSON.parse(auth)
        config.headers.Authorization = 'Bearer' + auth.accessToken
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

authApi.interceptors.response.use(
    (response) => {
        return response
      },
      async(error) => {
        // if (error.response.data.message === 'Token expired') {
        //   localStorage.removeItem('auth')
        //   hi.push({ name: 'login' })
        // }
        // if (typeof error.response.data.message === 'string') {
        // //   Message.error(error.response.data.message)
        // } else if (typeof error.response.data.message === 'object' && error.response.data.message.length > 0) {
        //   for (const item of error.response.data.message) {
        //     // Message.error(item)
        //     await delay(300)
        //   }
        // } else {
        // //   Message.error('An error has occured!')
        // }
        return Promise.reject(error)
      }
    
)