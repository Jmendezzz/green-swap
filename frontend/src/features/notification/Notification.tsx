import { useUserContext } from '@/context/UserContext';
import { NotificationDTO } from '@/domain/notification/NotificationDTO';
import { Client } from '@stomp/stompjs';
import { useState, useEffect } from 'react';
import { IoIosNotifications} from 'react-icons/io';
import SockJS from 'sockjs-client';
import styled from 'styled-components';
import Dropdown from '../ui/Dropdown';
import useUserNotifications from './useUserNotifications';

function Notification() {
  const {notifications:userNotifications} = useUserNotifications();

  const [notifications, setNotifications] = useState<NotificationDTO[]>([]);
  
  const { user } = useUserContext();

  useEffect(() => {
    if(userNotifications){
      setNotifications(userNotifications);
    }
  },[userNotifications]);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws/notification');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    stompClient.onConnect = (frame) => {
      console.log('Connected: ' + frame);
      stompClient.subscribe(`/user/notifications`, (message) => {
        console.log(message);
        if (message.body) {
          console.log(message.body);
          setNotifications((notifications) => [
            ...notifications,
            JSON.parse(message.body),
          ]);
        }
      });
    };

    stompClient.onStompError = (frame) => {
      console.log('Broker reported error: ' + frame.headers['message']);
      console.log('Additional details: ' + frame.body);
    };

    stompClient.activate();

    return () => {
      if (stompClient.connected) {
        stompClient.deactivate();
      }
    };
  }, [user]);

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle>
          <>
            <div style={{ position: 'relative' }}>
              <IoIosNotifications  className="w-[40px] h-[30px]" />
              {notifications.filter(noti => !noti.isRead).length > 0 && (
                <StyledNotificationCounter>
                  {notifications.length}
                </StyledNotificationCounter>
              )}
            </div>
          </>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <StyledNotificationsContainer>
            {notifications.map((notification) => (
              <div key={notification.id}>{notification.message}</div>
            ))}
          </StyledNotificationsContainer>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

const StyledNotificationCounter = styled.div`
  position: absolute;
  top: -15px;
  right: -5px;
  background-color: var(--red);
  color: var(--white);
  border-radius: 50%;
  padding: 0.1rem 0.8rem;
  font-size: 1.3rem;
  font-weight: 800;
`;
const StyledNotificationsContainer = styled.div`
  min-width: 300px;
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  & > div{
    &:hover{
      background-color: var(--primary-color-light);
    }
  }
`
export default Notification;
