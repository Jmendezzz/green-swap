import { useState } from 'react';
import SignUpSteps from './SignUpSteps';
import AuthFormContainer from '@/features/ui/AuthFormContainer';
import Row from '@/features/ui/Row';
import FormRow from '@/features/ui/FormRow';
import Input from '@/features/ui/Input';
import Heading from '@/features/ui/Heading';
import { useForm } from 'react-hook-form';

function SignUpForm() {
  const [step, setStep] = useState(1);
  return (
    <Row type="vertical" className="gap-5 w-full">
      <SignUpSteps step={step} setStep={setStep} />
      {step === 1 && <PersonalInfoForm />}
    </Row>
  );
}

function PersonalInfoForm() {
  const { register, formState = { errors } } = useForm();
  return (
    <AuthFormContainer type="vertical">
      <Heading type="h1">Crea tu cuenta</Heading>
      <form className="flex flex-col w-full items-center gap-10">
        <FormRow>
          <Input
            type="text"
            variant="outlined"
            placeholder="Nombre"
            {...register('firstName', { required: 'El nombre es requerido' })}
          />
        </FormRow>
        <FormRow>
          <Input type="text" variant="outlined" placeholder="Apellidos" />
        </FormRow>
        <FormRow>
          <Input
            type="text"
            variant="outlined"
            placeholder="Número telefonico"
          />
        </FormRow>
      </form>
    </AuthFormContainer>
  );
}

export default SignUpForm;
