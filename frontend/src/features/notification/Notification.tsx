import { useUserContext } from '@/context/UserContext';
import { NotificationDTO } from '@/domain/notification/NotificationDTO';
import { Client } from '@stomp/stompjs';
import { useState, useEffect } from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import SockJS from 'sockjs-client';

function Notification() {
  const [notifications, setNotifications] = useState<NotificationDTO[]>([]);
  const { user } = useUserContext();

  useEffect(() => {
    /*const socket = new SockJS('http://localhost:8080/notification');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });

    stompClient.onConnect = (frame) => {
      console.log('Connected: ' + frame);
      stompClient.subscribe(`/user/${user?.email}/notifications`, (message) => {
        if (message.body) {
          console.log(message.body);
          setNotifications((notifications) => [...notifications, JSON.parse(message.body)]);
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
    }; */
  }, [user]);

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <IoIosNotificationsOutline size={40} className='' />
        {notifications.length > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              padding: '5px 10px',
              borderRadius: '50%',
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            {notifications.length}
          </span>
        )}
      </div>
      {notifications.map((notification, index) => (
        <p key={index}>{notification.message}</p>
      ))}
    </div>
  );
}

export default Notification;
