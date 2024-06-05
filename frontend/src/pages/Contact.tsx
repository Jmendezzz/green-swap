import Button from '@/features/ui/Button';
import FormRow from '@/features/ui/FormRow';
import Heading from '@/features/ui/Heading';
import Input from '@/features/ui/Input';
import Section from '@/features/ui/Section';
import Textarea from '@/features/ui/Textarea';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import davidImage from '../assets/contact-image.png';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}
function Contact() {
  const {
    register,
    formState: { errors },
  } = useForm<ContactFormState>({
    mode: 'onTouched',
  });
  return (
    <StyledContact>
      <div className="flex flex-col w-full gap-28">
        <header className='text-center'>
          <Heading>Contactanos</Heading>
          <p>
            Si tienes alguna duda, sugerencia o comentario, no dudes en
            contactarnos.
          </p>
        </header>

        <div className="flex">
          <StyledImagesContainer>
            <img src={davidImage} alt="David" />

          </StyledImagesContainer>
          <StyledFormContainer>
            <form>
              <FormRow error={errors?.name?.message}>
                <Input
                  {...register('name', { required: 'El nombre es requerido' })}
                  placeholder="GreenSwap team"
                  type="text"
                  variant="non-outlined"
                />
              </FormRow>
                <FormRow error={errors?.email?.message}>
                    <Input
                    {...register('email', {
                        required: 'El email es requerido',
                        pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Email invalido',
                        },
                    })}
                    placeholder="Email"
                    type="email"
                    variant="non-outlined"
                    />
                </FormRow>
                <FormRow error={errors?.message?.message}>
                    <Textarea
                    {...register('message', { required: 'El mensaje es requerido' })}
                    placeholder="Mensaje"
                    />
                </FormRow>
                <div className='flex justify-end'>
                    <Button variant='primary'>Enviar</Button>
                </div>

            </form>
          </StyledFormContainer>
        </div>
      </div>
    </StyledContact>
  );
}

const StyledContact = styled(Section)`
  background-color: var(--primary-color);
`;

const StyledFormContainer = styled.div`
  background-color: var(--primary-color-light);
  border-radius:3rem;
  width: 50%;
  padding: 4rem;
  & > form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const StyledImagesContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    width: 50%;
    height: 100%;
    & > img{
        width: 100%;
        height:100%;
        object-fit: contain;
    }
    `;


export default Contact;
