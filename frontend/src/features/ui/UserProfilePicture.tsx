import { BasicInfoUserDTO } from '@/domain/user/BasicInfoUserDTO';
import useClickOutside from '@/hooks/useClickOutside';
import { motion } from 'framer-motion';
import { useState} from 'react';
import styled from 'styled-components';
import { useLogout } from '../auth/logout/useLogout';

function UserProfilePicture({ user }: { user: BasicInfoUserDTO }) {
  const { urlProfilePicture } = user;
  const [showDropdown, setShowDropDown] = useState(false);

  const {logout} = useLogout();

  const ref = useClickOutside(() => setShowDropDown(false));

  const onClickHandler = () => {
    setShowDropDown(prev => !prev);
  }

  return (
    <StyledUserProfilePicture onClick={onClickHandler} ref={ref}>
      {user.urlProfilePicture ? (
        <img src={urlProfilePicture} alt="Foto de perfil" />
      ) : (
        <h1 className='select-none'>
          {user.firstName.charAt(0)}
          {user.lastName.charAt(0)}
        </h1>
      )}
        {showDropdown && (
            <DropdownMenu 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}

            >
            <li>Editar perfil</li>
            <li onClick={()=>logout()}>Cerrar sesión</li>
            </DropdownMenu>
        )}
    </StyledUserProfilePicture>
  );
}

const StyledUserProfilePicture = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  background-color: var(--primary-color-light);
  padding: 1.4rem 2rem;
  font-size: 2rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  h1{
    width: 100%;
    height: 100%;
    display: flex;
  }
 
`;

const DropdownMenu = styled(motion.ul)`
  position: absolute;
  top: calc(100% + 9.1px); 
  right: calc(15%); 
  background-color: var(--primary-color-light);
  border-radius: 4px;
  padding: 1rem;
  list-style: none;
  z-index: 1000;
  width: 200px;

  &:before {
    content: '';
    position: absolute;
    top: -10px;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--primary-color-light);
  }

  & > li {
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: var(--primary-color);
    }
  }
`;

export default UserProfilePicture;