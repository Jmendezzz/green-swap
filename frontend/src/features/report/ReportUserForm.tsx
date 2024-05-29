import { useForm } from 'react-hook-form';
import FormRow from '../ui/FormRow';
import { CreateReportDTO } from '@/domain/report/CreateReportDTO';
import Button from '../ui/Button';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import styled from 'styled-components';
import { Devices } from '@/styles/Devices';
import { BasicInfoUserDTO } from '@/domain/user/BasicInfoUserDTO';
import Heading from '../ui/Heading';
import useReportUser from './useReportUser';
import Spinner from '../ui/Spinner';

const commonReportReasons = [
  'Productos falsos',
  'Productos prohibidos',
  'Usuario sospechoso',
  'Estafador',
  'Otro',
];

interface Props {
  user: BasicInfoUserDTO;
  onCloseModal?: () => void;
}
function ReportUserForm({ user, onCloseModal }: Props) {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<CreateReportDTO>({
    mode: 'onTouched',
  });

  const { reportUser, isLoading } = useReportUser();

  function submitHandler(data: CreateReportDTO) {
    reportUser(
      { report: data, userId: user.id },
      {
        onSuccess: () => {
          onCloseModal?.();
        },
      }
    );
  }

  return (
    <StyledReportUserForm onSubmit={handleSubmit(submitHandler)}>
      <Heading type="h2">
        Reportar a {user.firstName} {user.lastName}
      </Heading>
      <FormRow error={errors.reason?.message}>
        <label htmlFor="reason">Razón</label>
        <Select id="reason" {...register('reason')}>
          {commonReportReasons.map((reason, index) => (
            <option key={index} value={reason}>
              {reason}
            </option>
          ))}
        </Select>
      </FormRow>
      <FormRow error={errors.description?.message}>
        <label htmlFor="description">Descripción</label>
        <Textarea
          id="description"
          {...register('description', { required: 'Este campo es requerido' })}
        />
      </FormRow>
      <div className="flex justify-center">
        <Button variant="primary" size="medium">
          {isLoading ? <Spinner size="sm" /> : 'Reportar'}
        </Button>
      </div>
      <p className="text-center text-2xl text-gray-200">
        Tu reporte será revisado por nuestro equipo
      </p>
    </StyledReportUserForm>
  );
}
const StyledReportUserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  min-width: 200px;

  @media (min-width: ${Devices.tablet}) {
    min-width: 400px;
  }
`;
export default ReportUserForm;
