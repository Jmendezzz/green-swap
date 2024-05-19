import { useUserContext } from '@/context/UserContext';
import axios from 'axios';
export const axiosInstace = axios.create({
    baseURL:"http://localhost:8080",
    withCredentials:true
});

axios.interceptors.response.use(
    function (response) {
      // If the response is successful, just return it
      return response;
    },
    function (error) {
      // If the response has a status of 401, clear the user state
      if (error.response && error.response.status === 401) {
        const { setUser } = useUserContext();
        setUser(null);
      }
  
      return Promise.reject(error);
    }
  );