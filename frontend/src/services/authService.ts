import SignUpRequestDTO from '@/domain/auth/SignUpRequestDTO';
import { axiosInstace } from './axiosConfig';

const REQUEST_MAPPING = '/auth';

export function loginService(email: string, password: string) {
  return axiosInstace.post(`${REQUEST_MAPPING}/login`,
    {
      email,
      password,
    },
    { 
			withCredentials: true 
		}
  );
}

export function signUpService(signUpData: SignUpRequestDTO) {
  return axiosInstace.post(`${REQUEST_MAPPING}/signup`, signUpData);
}
