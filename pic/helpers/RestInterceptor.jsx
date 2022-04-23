import * as axios from 'axios';
import GlobalProperties from './GlobalProperties';

const axiosInstance = axios.create();

axios.default.baseURL = GlobalProperties.baseURL;

axiosInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  //config.timeout = 10000;
  return config;
});

axiosInstance.interceptors.response.use((response) => {

    return response;
  }, error => {
     //   console.warn('Error status', JSON.stringify(error.response.data.message));
        return Promise.reject(error)
  })
export const http = axiosInstance;
