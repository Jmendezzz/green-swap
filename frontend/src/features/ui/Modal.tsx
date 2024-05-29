import useClickOutside from '@/hooks/useClickOutside';
import {
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';
import styled from 'styled-components';


const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-color-light);
  border-radius: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  padding: 3.2rem 4rem;
  transition: all 0.5s;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 100;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;
interface ContextStructure{
  open:(name:string)=> void,
  windowName:string
}
const ModalContext = createContext<ContextStructure>({} as ContextStructure);

function Modal({ children }: { children: ReactNode }) {
  const [windowName, setWindowName] = useState('');
  const open = setWindowName;

  return (
    <ModalContext.Provider value={{ windowName, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens, children }: { opens: string; children: ReactElement }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({ children, name }: { children: ReactElement; name: string }) {
  const { open, windowName } = useContext(ModalContext);

  const windowRef = useClickOutside(() => open(''));

  if (windowName !== name) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={windowRef as React.RefObject<HTMLDivElement>}>
        <Button onClick={() => open('')}>
          <HiXMark />
        </Button>
        {cloneElement(children, { onCloseModal: () => open('') })}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;