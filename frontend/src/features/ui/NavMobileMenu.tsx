import { ROUTES } from '@/constants/routes';
import { useUserContext } from '@/context/UserContext';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import UserProfilePicture from './UserProfilePicture';
import Button from './Button';

interface NavMobileMenuProps {
  setIsOpen: (isOpen: boolean) => void;
}

function NavMobileMenu({ setIsOpen }: NavMobileMenuProps) {
  const { user } = useUserContext();
  return (
    <StyledNavMobileMenu
      initial={{ x: '100%' }}
      animate={{ x: 0, overflowX: 'hidden'}}
      exit={{ x: '100%', display: 'none'}}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <StyledUl >
        <li className="flex flex-col">
          <StyledNavLink to={ROUTES.home} onClick={() => setIsOpen(false)}>Inicio</StyledNavLink>
          <StyledNavLink to={ROUTES.products} onClick={() => setIsOpen(false)}>Productos</StyledNavLink>
          <StyledNavLink to={ROUTES.contact} onClick={() => setIsOpen(false)}>Contacto</StyledNavLink>
        </li>

        <li>
          {user && <UserProfilePicture user={user} />}
          {!user && (
            <NavLink to={ROUTES.login}>
              <Button variant="primary">Ingresar</Button>
            </NavLink>
          )}
        </li>
      </StyledUl>
    </StyledNavMobileMenu>
  );
}

const StyledNavMobileMenu = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: var(--primary-color);
  z-index: 100;
  overflow-x: hidden; /* Prevent horizontal scroll */
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: 4rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 1rem 0;
  transition: all 0.3s ease;

  &.active {
    text-shadow: 0 0 10px #1ac760, 0 0 20px rgba(255, 255, 255, 0.6),
      0 0 30px rgba(255, 255, 255, 0.4);
  }

  &:hover {
    text-shadow: 0 0 10px #1ac760, 0 0 5px rgba(255, 255, 255, 0.6),
      0 0 10px rgba(255, 255, 255, 0.4);
  }
`;
export default NavMobileMenu;
