import { sendEmailConfirmationService } from '@/services/authService';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

interface CustomError {
  message: string;
  status: number;
}

function useSendEmailValidation() {
  const { mutate, isLoading, isSuccess, error } = useMutation({
    mutationFn: () => sendEmailConfirmationService(),
  });

  let serverError: string | undefined;
  if (error && (error as AxiosError<CustomError>)) {
    serverError = (error as AxiosError<CustomError>).response?.data?.message;
  }

  return {
    sendEmailValidation: mutate,
    isLoading,
    error: serverError,
    isSuccess,
  };
}

export default useSendEmailValidation;
