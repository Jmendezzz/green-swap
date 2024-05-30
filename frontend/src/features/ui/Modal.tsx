import useClickOutside from '@/hooks/useClickOutside';
import { AnimatePresence, motion } from 'framer-motion';
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

const StyledModal = styled(motion.div)`
  position: fixed;
  background-color: var(--primary-color-light);
  border-radius: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  padding: 3.2rem 4rem;
  transition: all 0.5s;
  z-index: 1000;
`;

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
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
    color: var(--color-grey-500);
  }
`;
interface ContextStructure {
  open: (name: string) => void;
  windowName: string;
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
      <AnimatePresence>
        {windowName === name && (
          <StyledModal
            key={name}
            ref={windowRef as React.RefObject<HTMLDivElement>}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Button onClick={() => open('')}>
              <HiXMark />
            </Button>
            {cloneElement(children, { onCloseModal: () => open('') })}
          </StyledModal>
        )}
      </AnimatePresence>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
