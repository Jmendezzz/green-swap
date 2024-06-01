import { NotificationDTO } from "@/domain/notification/NotificationDTO";
import { axiosInstace } from "./axiosConfig";


const REQUEST_MAPPING = '/notifications';

export function markAsReadNotificationsService(notifications: NotificationDTO[]) {
  return axiosInstace.patch(`${REQUEST_MAPPING}/mark-as-read`, notifications);
}