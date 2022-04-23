import * as axios from 'axios';
import GlobalProperties from './GlobalProperties';
import {notify} from 'react-notify-toast';

const axiosInstance = axios.create();

axios.defaults.baseURL = GlobalProperties.baseURL;

axiosInstance.interceptors.request.use((config) => {
  config.headers['Authorization'] = 'Bearer '+GlobalProperties.public_jwt;
  config.headers['Content-Type'] = 'application/json';
  config.timeout = 10000;
  return config;
});

axiosInstance.interceptors.response.use((response) => {

    return response;
  }, error => {
        console.warn('Error status', JSON.stringify(error.response.data.message));
        notify.show(error.response.status+" - "+error.response.data.error+" ["+JSON.stringify(error.response.data.message)+"]", "error");
        return Promise.reject(error)
  })
export const http = axiosInstance;
