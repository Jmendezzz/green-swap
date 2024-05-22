import { confirmAccountService } from '@/services/authService';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

interface CustomError {
  message: string;
  status: number;
}

function useConfirmAccount() {
  const { error, status, mutate } = useMutation({
    mutationFn: (token: string) => confirmAccountService(token),
  });
  let serverError: string | undefined;
  if (error && (error as AxiosError<CustomError>).response) {
    serverError = (error as AxiosError<CustomError>).response?.data?.message;
  }

  return {
    error: serverError,
    isLoading: status === 'loading',
    confirmAccount: mutate,
  };
}

export default useConfirmAccount;
