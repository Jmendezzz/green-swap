
import axios from 'axios';
export const axiosInstace = axios.create({
    baseURL:"http://localhost:8080",
    withCredentials:true
});

axiosInstace.interceptors.response.use(
    function (response) {
      // If the response is successful, just return it
      return response;
    },
    async function (error) {
      // If the response has a status of 401, clear the user state
      if (error.response && error.response.status === 401) {
        console.log('Error 401');
      }
  
      return Promise.reject(error);
    }
  );