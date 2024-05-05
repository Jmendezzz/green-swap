import { useSignUpContext } from '@/context/SignUpContext';
import AuthFormContainer from '@/features/ui/AuthFormContainer';
import FormRow from '@/features/ui/FormRow';
import Input from '@/features/ui/Input';
import { useForm } from 'react-hook-form';
import SingUpFormsButtons from './SingUpFormsButtons';
import {
  hasNumber,
  hasSpecialCharacter,
  hasUpperCase,
} from './utils/passwordRegexFunctions';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import SignUpFormHeader from './SignUpFormHeader';
import Form from '@/features/ui/Form';
import PasswordInput from '@/features/ui/PasswordInput';

interface AccountInfoForm {
  email: string;
  password: string;
  confirmPassword: string;
}

function AccountInfoForm() {
  const { addSignUpData, signUpData, nextStep } = useSignUpContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm<AccountInfoForm>({
    mode: 'onTouched',
    defaultValues: {
      email: signUpData.email,
      password: signUpData.password,
      confirmPassword: signUpData.confirmPassword,
    },
  });

  const onSubmit = handleSubmit((data) => {
    addSignUpData({
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
    nextStep();
  });

  const onBackHandler = () => {
    addSignUpData({
      email: getValues('email'),
      password: getValues('password'),
      confirmPassword: getValues('confirmPassword'),
    });
  };

  return (
    <AuthFormContainer type="vertical">
      <SignUpFormHeader label="Ingresa los datos de tu cuenta" />
      <Form onSubmit={onSubmit}>
        <FormRow error={errors?.email?.message}>
          <Input
            type="text"
            variant="outlined"
            placeholder="Correo electrónico"
            {...register('email', {
              required: 'El correo electrónico es requerido',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'El correo electrónico no es válido',
              },
            })}
          />
        </FormRow>
        <FormRow
          error={
            errors?.password?.type == 'required'
              ? errors?.password.message
              : undefined
          }
        >
          <PasswordInput
            register={register('password', {
              required: 'La contraseña es requerida',
              minLength: {
                value: 8,
                message: 'La contraseña debe tener al menos 8 caracteres',
              },
              validate: {
                hasUpperCase: (value) =>
                  hasUpperCase(value) ||
                  'La contraseña debe tener al menos una letra mayúscula',
                hasNumber: (value) =>
                  hasNumber(value) ||
                  'La contraseña debe tener al menos un número',
                hasSpecialCharacter: (value) =>
                  hasSpecialCharacter(value) ||
                  'La contraseña debe tener al menos un caracter especial',
              },
            })}
            placeholder="Contraseña"
          />
          <PasswordStrengthIndicator password={watch('password')} />
        </FormRow>
        <FormRow error={errors?.confirmPassword?.message}>
          <PasswordInput
            placeholder="Confirma tu contraseña"
            register={register('confirmPassword', {
              required: 'La contraseña es requerida',
              validate: (value) =>
                value === getValues('password') ||
                'Las contraseñas no coinciden',
            })}
          />
        </FormRow>
        <SingUpFormsButtons onBack={onBackHandler} />
      </Form>
    </AuthFormContainer>
  );
}

export default AccountInfoForm;
