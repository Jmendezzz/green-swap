import axios from 'axios';
export const axiosInstace = axios.create({
    baseURL:"http://localhost:8080"
});