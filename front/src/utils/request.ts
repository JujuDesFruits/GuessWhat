import axios from 'axios';
import { UserModule } from '@/store/modules/UserModule';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (UserModule.token) {
      config.headers['Authorization'] = 'Bearer ' + UserModule.token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default service;
