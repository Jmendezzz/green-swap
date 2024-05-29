import { BasicInfoUserDTO } from '@/domain/user/BasicInfoUserDTO';
import useClickOutside from '@/hooks/useClickOutside';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import { useLogout } from '../auth/logout/useLogout';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';


function UserProfilePicture({ user, size = 'sm' }: { user: BasicInfoUserDTO, size?: 'xsm' | 'sm' | 'lg' | 'xl'}) {
  const { urlProfilePicture } = user;
  const [showDropdown, setShowDropDown] = useState(false);

  const { logout } = useLogout();

  const ref = useClickOutside(() => setShowDropDown(false));

  const onClickHandler = () => {
    setShowDropDown((prev) => !prev);
  };

  return (
    <StyledUserProfilePicture onClick={onClickHandler} ref={ref} size={size}>
      {user.urlProfilePicture ? (
        <StyledImageContainer>
          <img src={urlProfilePicture} alt="Foto de perfil" />
        </StyledImageContainer>
      ) : (
        <div>
          <h1 className="select-none">
            {user.firstName.charAt(0)}
            {user.lastName.charAt(0)}
          </h1>
        </div>
      )}
      {showDropdown && (
        <DropdownMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <li>
            <Link to={ROUTES.updateProfile} className='w-full'>Editar perfil</Link>
          </li>

          <li onClick={() => logout()}>Cerrar sesión</li>
        </DropdownMenu>
      )}
    </StyledUserProfilePicture>
  );
}
interface StyledProps {
  size: 'xsm' | 'sm' | 'lg' | 'xl';
}

const StyledUserProfilePicture = styled.div<StyledProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: ${({ size }) => {
    switch (size) {
      case 'xsm':
        return '25px';
      case 'sm':
        return '50px';
      case 'lg':
        return '100px';
      case 'xl':
        return '150px';
      default:
        return '50px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'xsm':
        return '25px';
      case 'sm':
        return '50px';
      case 'lg':
        return '100px';
      case 'xl':
        return '150px';
      default:
        return '50px';
    }
  }};
  background-color: var(--primary-color-light);
  font-size: ${({ size }) => {
    switch (size) {
      case 'xsm':
        return '1rem';
      case 'sm':
        return '2rem';
      case 'lg':
        return '4rem';
      case 'xl':
        return '6rem';
      default:
        return '2rem';
    }
  }};
  cursor: pointer;
  h1 {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
