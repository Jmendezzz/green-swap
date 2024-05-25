import { useState } from 'react';
import UploadImageInput from '../ui/UploadImageInput';
import { Controller, useForm } from 'react-hook-form';
import { CreateProductDTO } from '@/domain/product/CreateProductDTO';
import FormRow from '../ui/FormRow';
import Input from '../ui/Input';
import NumericInput from '../ui/NumericInput';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { getCategoryKeys, getCategoryValue } from '@/domain/product/Category';
import Select from '../ui/Select';
import { getQualityKeys, getQualityValue } from '@/domain/product/Condition';
import styled from 'styled-components';
import Heading from '../ui/Heading';
import { ProductDTO } from '@/domain/product/ProductDTO';
import { useUserContext } from '@/context/UserContext';
import CreateProductPreview from './CreateProductPreview';
import { BasicInfoUserDTO } from '@/domain/user/BasicInfoUserDTO';
import useCreateProduct from './useCreateProduct';
import { Status} from '@/domain/product/Status';
import Spinner from '../ui/Spinner';

function CreateProductForm() {
  const { user } = useUserContext();
  const [file, setFile] = useState<File | undefined>(undefined);
  function handleFileChange(file: File | undefined) {
    setFile(file);
  }
  const {createProduct,isLoading} = useCreateProduct();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    watch,
  } = useForm<CreateProductDTO>({ mode: 'onTouched' });

  function onSubmit(data: CreateProductDTO) {
    const product: CreateProductDTO = {
      ...data,
      productImage: file ,
      status: "PUBLISHED" as keyof typeof Status,
    }
    console.log(product);
    createProduct(product);
  }
  const watchAllFields = watch();


  const previewProduct: Partial<ProductDTO> = {
    ...watchAllFields,
    urlImage: file ? URL.createObjectURL(file) : '',
    createdAt: new Date(),
    owner: user as BasicInfoUserDTO,
    status: Status.PUBLISHED
  };

  return (
    <div className="flex gap-10">
      <StyledCreateProductFormContainer>
        <header>
          <Heading type="h2">Crear producto</Heading>
        </header>
        <StyledCreateProductForm onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center justify-center">
            <UploadImageInput image={file} setImage={handleFileChange} />
          </div>
          <FormRow error={errors?.name?.message}>
            <Input
              variant="filled"
              placeholder="Nombre"
              {...register('name', { required: 'El nombre es requerido' })}
            />
          </FormRow>
          <FormRow error={errors?.description?.message}>
            <Textarea
              placeholder="Descripción"
              {...register('description', {
                required: 'La descripción es requerida',
                maxLength: {
                  value: 300,
                  message:
                    'La descripción no puede tener más de 300 caracteres',
                },
              })}
            />
          </FormRow>
          <FormRow error={errors?.price?.message}>
            <Controller
              name="price"
              control={control}
              rules={{
                required: 'El precio es requerido',
                min: { value: 0, message: 'El precio no puede ser negativo' },
              }}
              render={({ field }) => (
                <NumericInput
                  placeholder="Precio"
                  value={ field.value?.toString() || ''}
                  onBlur={field.onBlur}
                  onChange={(value) => field.onChange(Number(value))}
                />
              )}
            />
          </FormRow>
          <FormRow error={errors?.category?.message}>
            <Controller
              name="category"
              control={control}
              rules={{ required: 'La categoría es requerida' }}
              render={({ field }) => (
                <Select {...field}>
                  <option value="" disabled selected>
                    Selecciona una categoría
                  </option>
                  {getCategoryKeys().map((key) => (
                    <option key={key} value={key}>
                      {getCategoryValue(key)}
                    </option>
                  ))}
                </Select>
              )}
            />
          </FormRow>
          <FormRow error={errors?.quality?.message}>
            <Controller
              name="quality"
              control={control}
              rules={{ required: 'La calidad es requerida' }}
              render={({ field }) => (
                <Select {...field}>
                  <option value="" disabled selected>
                    Selecciona una calidad
                  </option>
                  {getQualityKeys().map((key) => (
                    <option key={key} value={key}>
                      {getQualityValue(key)}
                    </option>
                  ))}
                </Select>
              )}
            />
          </FormRow>
          <Button type="submit" variant="primary" disabled={isLoading} >
            {isLoading ? <Spinner/>  : 'Crear'}
          </Button>
        </StyledCreateProductForm>
      </StyledCreateProductFormContainer>
      <CreateProductPreview product={previewProduct} />
    </div>
  );
}

const StyledCreateProductFormContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%; /* Set a specific height */
  background-color: var(--primary-color-light);
  border-radius: 2rem;
  width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledCreateProductForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  overflow-y: auto;
  max-height: 80vh;
`;

export default CreateProductForm;
