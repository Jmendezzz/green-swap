import { useUserContext } from '@/context/UserContext';
import Button from '@/features/ui/Button';
import FormRow from '@/features/ui/FormRow';
import Input from '@/features/ui/Input';
import UploadImageInput from '@/features/ui/UploadImageInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function UpdateProfileForm() {
  const { user } = useUserContext();
  const [image, setImage] = useState<File | undefined | string>(
    user?.urlProfilePicture
  );

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
    },
  });

  return (
    <form className="w-full space-y-10 p-20">
      <UploadImageInput image={image} setImage={setImage} />
      <div className="flex justify-between w-full gap-20">
        <FormRow error={errors?.firstName?.message}>
          <label htmlFor="name">Nombre</label>
          <Input
            id="name"
            variant="non-outlined"
            {...register('firstName', { required: 'Este campo es requerido' })}
          />
        </FormRow>
        <FormRow error={errors?.lastName?.message}>
          <label htmlFor="lastName">Apellidos</label>
          <Input
            id="lastName"
            variant="non-outlined"
            {...register('lastName', { required: 'Este campo es requerido' })}
          />
        </FormRow>
      </div>

      <div className="flex justify-between w-full gap-20">
        <FormRow error={errors?.firstName?.message}>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            variant="non-outlined"
            disabled={true}
            {...register('email')}
          />
        </FormRow>
        <FormRow error={errors?.lastName?.message}>
          <label htmlFor="phoneNumber">Número de celular</label>
          <Input
            id="phoneNumber"
            variant="non-outlined"
            {...register('phoneNumber', {
              required: 'Este campo es requerido',
            })}
          />
        </FormRow>
      </div>

      <div className='flex justify-end'>
        <Button variant="primary">Guardar Cambios</Button>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
