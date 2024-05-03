import { useSignUpContext } from '@/context/SignUpContext';
import AuthFormContainer from '@/features/ui/AuthFormContainer';
import FormRow from '@/features/ui/FormRow';
import Heading from '@/features/ui/Heading';
import Input from '@/features/ui/Input';
import { useForm } from 'react-hook-form';
import SingUpFormsButtons from './SingUpFormsButtons';

interface PersonalInfoForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

function PersonalInfoForm() {
  const { addSignUpData,  signUpData, nextStep} = useSignUpContext();
  const {
    register,
    formState: { errors},
    handleSubmit,
  } = useForm<PersonalInfoForm>({ mode: 'onTouched' });


  const onSubmit = handleSubmit((data) => {
    addSignUpData(data);
    nextStep(); 
  });
  return (
    <AuthFormContainer type="vertical">
      <header className='text-center'>
      <Heading type="h1">Crea tu cuenta</Heading>
      <p>Necesitamos tus datos personales</p>

      </header>
      <form
        className="flex flex-col w-full items-center gap-10"
        onSubmit={onSubmit}
      >
        <div className='w-full space-y-10'>
        <FormRow error={errors?.firstName?.message}>
          <Input
            defaultValue={signUpData.firstName}
            type="text"
            variant="outlined"
            placeholder="Nombre"
            {...register('firstName', { required: 'El nombre es requerido',
              minLength: {
                value: 3,
                message: 'El nombre debe tener al menos 3 caracteres',
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.lastName?.message}>
          <Input
            type="text"
            variant="outlined"
            placeholder="Apellidos"
            defaultValue={signUpData.lastName}
            {...register('lastName', {
              required: 'Los apellidos son requeridos',
              minLength: {
                value: 3,
                message: 'Los apellidos deben tener al menos 3 caracteres',
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.phoneNumber?.message}>
          <Input
            defaultValue={signUpData.phoneNumber}
            type="text"
            variant="outlined"
            placeholder="Número telefonico"
            {...register('phoneNumber', {
              required: 'El número telefonico es requerido',
            })}
          />
        </FormRow>
        </div>

        <SingUpFormsButtons />
      </form>
    </AuthFormContainer>
  );
}

export default PersonalInfoForm;
