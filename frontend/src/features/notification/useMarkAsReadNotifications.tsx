import { NotificationDTO } from "@/domain/notification/NotificationDTO";
import { markAsReadNotificationsService } from "@/services/notificationService";
import { useMutation, useQueryClient } from "react-query";

function useMarkAsReadNotifications(){
    const queryClient = useQueryClient();
    const {status, mutate: markAsReadNotifications} = useMutation({
        mutationFn: (notifications: NotificationDTO[]) => markAsReadNotificationsService(notifications),
        onSuccess: () =>{
            queryClient.invalidateQueries('userNotifications');
        }
    })

    return {
        isLoading : status === 'loading',
        markAsReadNotifications
    }
}

export default useMarkAsReadNotifications;