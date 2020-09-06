import axios from 'axios'
import apiConfig from '@/config/index'

let service = axios.create({
  baseURL: apiConfig.BASE_URL,
  headers: {
    "Accept": 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

service.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status == '401') {
      localStorage.removeItem('token')
      router.replace('/login')
    }
  }
)

let get = async (relativeUrl, params) => {
  let response = await service.get(relativeUrl, {
    params: params
  });
  return response.data;
};

let post = async (relativeUrl, params) => {
  let response = await service.post(relativeUrl, params);
  return response.data;
};

export { get, post };