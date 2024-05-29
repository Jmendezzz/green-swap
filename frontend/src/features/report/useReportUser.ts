import { CreateReportDTO } from '@/domain/report/CreateReportDTO';
import { reportUserService } from '@/services/reportService';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

function useReportUser() {
  const { mutate: reportUser, status } = useMutation({
    mutationFn: ({report,userId}: {report: CreateReportDTO;userId: string;}) => reportUserService(report, userId),
    onSuccess: () => {
      toast.success('Usuario reportado');
    },
    onError: () => {
      toast.error('Error al reportar al usuario');
    },
  });

  return { reportUser, isLoading: status === 'loading' };
}

export default useReportUser;
