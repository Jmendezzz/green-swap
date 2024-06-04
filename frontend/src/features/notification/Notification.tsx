import { NotificationDTO } from '@/domain/notification/NotificationDTO';
import { Client } from '@stomp/stompjs';
import { useState, useEffect } from 'react';
import { IoIosNotifications } from 'react-icons/io';
import SockJS from 'sockjs-client';
import styled from 'styled-components';
import Dropdown from '../ui/Dropdown';
import useUserNotifications from './useUserNotifications';
import useMarkAsReadNotifications from './useMarkAsReadNotifications';
import { Link } from 'react-router-dom';

function Notification() {
  const { notifications: userNotifications } = useUserNotifications();

  const { isLoading, markAsReadNotifications } = useMarkAsReadNotifications();

  const [notifications, setNotifications] = useState<NotificationDTO[]>([]);

  function markAsReadHandler() {
    markAsReadNotifications(notifications);
  }

  useEffect(() => {
    if (userNotifications) {
      setNotifications(userNotifications);
    }
  }, [userNotifications]);

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
  }, []);

  const numberOfUnreadNotifications = notifications.filter(
    (noti) => !noti.isRead
  ).length;

  return (
    <div onClick={markAsReadHandler}>
      <Dropdown>
        <Dropdown.Toggle>
          <>
            <div style={{ position: 'relative' }}>
              <IoIosNotifications className="w-[40px] h-[30px]" />
              {numberOfUnreadNotifications > 0 && (
                <StyledNotificationCounter>
                  {isLoading
                    ? '...'
                    : numberOfUnreadNotifications > 9
                    ? '9+'
                    : numberOfUnreadNotifications}
                </StyledNotificationCounter>
              )}
            </div>
          </>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <StyledNotificationsContainer>
            {notifications.length === 0 ? (
              <div>No tienes notificaciones</div>
            ) : (
              notifications.map((noti) => (
                <Link to={noti.url} key={noti.id} >
                  <StyledNotification isRead={noti.isRead}>
                    {noti.message}
                  </StyledNotification>
                </Link>
              ))
            )}
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
  border-radius: 0.5rem;
`;

const StyledNotification = styled.div<{ isRead: boolean }>`
  background-color: ${({ isRead }) =>
    isRead ? 'transparent' : 'var(--contrast-color-dark)'};
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color:var(--contrast-color-dark);
  }
`;
export default Notification;
