import { useSignUpContext } from '@/context/SignUpContext';
import AuthFormContainer from '@/features/ui/AuthFormContainer';
import FormRow from '@/features/ui/FormRow';
import Input from '@/features/ui/Input';
import { useForm } from 'react-hook-form';
import SingUpFormsButtons from './SingUpFormsButtons';
import SignUpFormHeader from './SignUpFormHeader';
import Form from '@/features/ui/Form';

interface PersonalInfoForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

function PersonalInfoForm() {
  const { addSignUpData, signUpData, nextStep } = useSignUpContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PersonalInfoForm>({
    mode: 'onTouched',
    defaultValues: {
      firstName: signUpData.firstName,
      lastName: signUpData.lastName,
      phoneNumber: signUpData.phoneNumber,
    },
  });

  const onSubmit = handleSubmit((data) => {
    addSignUpData(data);
    nextStep();
  });
  return (
    <AuthFormContainer type="vertical">
      <SignUpFormHeader label="Necesitamos tus datos personales" />
      <Form onSubmit={onSubmit}>
        <div className="w-full space-y-10">
          <FormRow error={errors?.firstName?.message}>
            <Input
              type="text"
              variant="outlined"
              placeholder="Nombre"
              {...register('firstName', {
                required: 'El nombre es requerido',
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
      </Form>
    </AuthFormContainer>
  );
}

export default PersonalInfoForm;
