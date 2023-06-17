
const baseUrl =  "http://192.168.2.108:3000" //process.env.VUE_APP_BACKEND_URL
const axios = require('axios');
export const finAgent = axios.create({

  baseURL: `${baseUrl}/api`
}
);

// Request interceptor for API calls
finAgent.interceptors.request.use(
    async config => {

      config.headers = { 
        'Accept': 'application/json'       
      }
      return config;
    },
    error => {
      Promise.reject(error)
  });
