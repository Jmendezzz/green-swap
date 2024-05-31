import { getUserNotificationsService } from '@/services/userService';
import { useQuery } from 'react-query';

function useUserNotifications() {
  const { data: notifications, status } = useQuery({
    queryKey: 'userNotifications',
    queryFn: getUserNotificationsService,
  });

  return {
    notifications: notifications?.data,
    isLoading: status === 'loading',
  };
}
export default useUserNotifications;
