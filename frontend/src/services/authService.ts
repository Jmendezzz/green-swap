import { axiosInstace } from "./axiosConfig";

const REQUEST_MAPPING = '/auth';

export function loginService(email: string, password: string){
    
    return fetch(`${axiosInstace.defaults.baseURL}${REQUEST_MAPPING}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
}