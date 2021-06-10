import axios from 'axios';
import { useSelector } from 'react-redux';

export const clientApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    headers: {
      // 'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: ''
    }
  })
  
  // Add a request interceptor
  clientApi.interceptors.request.use(
    (config) => {
    //   dev.log('DevOnly | Client API executed')
    //   // Must return config
      return config
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error)
    }
  )
  
  // Add a response interceptor
  clientApi.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
    //   Message.error(error.response.data.message)
      return Promise.reject(error)
    }
  )