import { useUserContext } from '@/context/UserContext';
import { ChatDTO } from '@/domain/chat/ChatDTO';
import { MessageDTO } from '@/domain/chat/MessageDTO';
import { BasicInfoUserDTO } from '@/domain/user/BasicInfoUserDTO';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { connect, disconnect, sendMessage } from './useChatWebSocket';
import Input from '../ui/Input';
import { SendMessageDTO } from '@/domain/chat/SendMessageDTO';
import { IoMdSend } from 'react-icons/io';

interface Props {
  chat: ChatDTO;
}

function Chat({ chat }: Props) {
  const { user: currentUser } = useUserContext();
  const [messages, setMessages] = useState<MessageDTO[]>(chat.messages || []);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    if (!currentUser) return;
    connect(currentUser.id, (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      disconnect();
    };
  }, [currentUser]);

const handleSendMessage = () => {
    if (messageInput.trim() === '' || !chat) return;
    if (!currentUser) return;
    const messageDTO: SendMessageDTO = {
        content: messageInput,
        senderId: currentUser.id,
    };
    sendMessage(chat.id.toString(), messageDTO);
    setMessageInput('');
};
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
};

const messagesRef = useRef<HTMLDivElement | null>(null);
useEffect(()=>{
    if(messagesRef.current){
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }

}, [messages])

if (!currentUser) return null;
  return (
    <StyledChat>
      {messages && messages.length > 0 ? (
        <StyledMessagesContainer ref={messagesRef}>
          {messages.map((message) => (
            <Message
              key={message.id}
              currentUser={currentUser}
              message={message}
            />
          ))}
        </StyledMessagesContainer>
      ) : (
        <p className="text-center">Inicia tu conversación.</p>
      )}
      <div className="flex items-center w-full gap-10">
        <Input
          className="flex-1"
          type="text"
          value={messageInput}
          onChange={handleInputChange}
          placeholder="Escribe un mensaje"
          variant="non-outlined"
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
        />
        <IoMdSend onClick={handleSendMessage} className='text-contrast text-5xl cursor-pointer'>
        </IoMdSend>
      </div>
    </StyledChat>
  );
}

const Message = ({
  currentUser,
  message,
}: {
  currentUser: BasicInfoUserDTO;
  message: MessageDTO;
}) => {
  const isCurrentUser = currentUser.id === message.sender.id;
  return (
    <StyledMessage isCurrentUser={isCurrentUser}>
      {!isCurrentUser && <Sender>{message.sender.firstName}</Sender>}
      <Content>{message.content}</Content>
    </StyledMessage>
  );
};
const StyledMessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    flex: 1;
`
const StyledChat = styled.div`
  background-color: var(--primary-color-light);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:2rem;
  width: 100%;
  height: 500px;
  overflow-y: auto;
  padding: 2%;
  border-radius:3rem;
  position: relative;
`;

const StyledMessage = styled.div<{ isCurrentUser: boolean }>`
  background-color: ${({ isCurrentUser }) =>
    isCurrentUser ? 'var(--contrast-color-dark)' : 'var(--primary-color)'};
  color: ${({ isCurrentUser }) =>
    isCurrentUser ? 'var(--contrast-color)' : 'var(--primary-color)'};
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  width: fit-content;
  max-width: 70%;
  align-self: ${({ isCurrentUser }) =>
    isCurrentUser ? 'flex-end' : 'flex-start'};
  text-align: ${({ isCurrentUser }) => (isCurrentUser ? 'right' : 'left')};
`;

const Sender = styled.p`
  font-weight: bold;
`;

const Content = styled.p`
  margin-top: 0.5rem;
`;

export default Chat;
