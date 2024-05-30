import { useEffect, useMemo, useState } from 'react';
import UploadImageInput from '../ui/UploadImageInput';
import { Controller, useForm, useWatch } from 'react-hook-form';
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
import { BasicInfoUserDTO } from '@/domain/user/BasicInfoUserDTO';
import useCreateProduct from './useCreateProduct';
import { Status } from '@/domain/product/Status';
import Spinner from '../ui/Spinner';

interface Props {
  onFormChange?: (product: Partial<ProductDTO>) => void;
  onSuccessHandler?:(product:ProductDTO)=>void;
  onCloseModal?: () => void;
  productStatus?: keyof typeof Status;
}

function CreateProductForm({ onFormChange, onSuccessHandler, onCloseModal, productStatus }: Props) {
  const { user } = useUserContext();

  const { createProduct, isLoading } = useCreateProduct(onSuccessHandler);

  const [file, setFile] = useState<File | undefined>(undefined);

  function handleFileChange(file: File | undefined) {
    setFile(file);
  }

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<CreateProductDTO>({ mode: 'onTouched' });

  const watchAllFields = useWatch({ control });

  function onSubmit(data: CreateProductDTO) {
    const product: CreateProductDTO = {
      ...data,
      productImage: file,
      status: productStatus || 'PUBLISHED'
    };
    createProduct(product,{
      onSuccess:()=>{
        onCloseModal?.();
      }
    });
  }
  const previewProduct: Partial<ProductDTO> = useMemo(
    () => ({
      ...watchAllFields,
      urlImage: file ? URL.createObjectURL(file) : '',
      createdAt: new Date(),
      owner: user as BasicInfoUserDTO,
      status: Status.PUBLISHED,
    }),
    [watchAllFields, file, user]
  );

  useEffect(() => {
    if (onFormChange) {
      onFormChange(previewProduct);
    }
  }, [onFormChange, previewProduct]);

  return (
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
                message: 'La descripción no puede tener más de 300 caracteres',
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
                value={field.value?.toString() || ''}
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
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Crear'}
        </Button>
      </StyledCreateProductForm>
    </StyledCreateProductFormContainer>
  );
}

const StyledCreateProductFormContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%; 
  width: 100%;
  background-color: var(--primary-color-light);
  border-radius: 2rem;
`;

const StyledCreateProductForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  overflow-y: auto;
  max-height: 100%;
`;

export default CreateProductForm;
