import SignUpRequestDTO from '@/domain/auth/SignUpRequestDTO';
import { axiosInstace } from './axiosConfig';

const REQUEST_MAPPING = '/auth';

export function loginService(email: string, password: string) {
  return axiosInstace.post(
    `${REQUEST_MAPPING}/login`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
}

export function signUpService(signUpData: SignUpRequestDTO) {
  const formData = new FormData();
  formData.append(
    'signUpInfo',
    new Blob([JSON.stringify(
      {
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        email: signUpData.email,
        phoneNumber: signUpData.phoneNumber,
        password: signUpData.password,
      }
    )], {type: 'application/json'})
  );
  if (signUpData.profilePicture) {
    formData.append('profilePicture', signUpData.profilePicture);
  }
  return axiosInstace.post(`${REQUEST_MAPPING}/signup`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    
    },
    withCredentials: true
  });
}

export function sendEmailConfirmationService() {
  return axiosInstace.post(`/mail/send-email-validation`);
}
